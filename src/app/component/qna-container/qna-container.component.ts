import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ChatCompletionResponse } from '../../../shared/interface/qna.interface';
import { QnaService } from '../../../shared/service/qna.service';

@Component({
  selector: 'app-qna-container',
  standalone: true,
  imports: [NzInputModule, FormsModule, NzIconModule],
  templateUrl: './qna-container.component.html',
  styleUrl: './qna-container.component.scss'
})
export class QnaContainerComponent {

  #service = inject(QnaService);
  messages = signal<{ user: string; message: string; typing?: boolean }[]>([]);
  userInput = signal<string>('');
  typedContent: string = '';


  constructor() {
    effect(() => {
      console.log('Messages are', this.messages());

    })
  }

  askQuestion() {
    const input = this.userInput()
    this.userInput.set('')
    this.messages.update(prev => [...prev, { user: 'person', message: input }]);
    this.#service.enhanceJobDescription<ChatCompletionResponse>(input).subscribe({
      next: (data) => {
        this.simulateAiResponse(JSON.parse(data.choices[0].message.content).answerText)
      }
    })
  }

  simulateAiResponse(response: string) {
    let index = 0;
    this.messages.update(prev => [...prev, { user: 'ai', message: '', typing: true }])
    const interval = setInterval(() => {
      this.typedContent += response[index];
      index++;
      if (index === response.length) {
        const l = this.messages().length;
        this.messages()[l - 1].typing = false;
        this.messages()[l - 1].message = response;
        clearInterval(interval);
        this.typedContent = ''

      }
    }, 50);
  }
}
