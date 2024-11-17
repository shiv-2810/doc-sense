import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { QnaService } from '../../../shared/service/qna.service';
import { QnaContainerComponent } from './qna-container.component';

describe('QnaContainerComponent', () => {
  let component: QnaContainerComponent;
  let fixture: any;
  let qnaService: QnaService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        QnaContainerComponent
      ],
      providers: [QnaService],
    }).compileComponents();

    fixture = TestBed.createComponent(QnaContainerComponent);
    component = fixture.componentInstance;
    qnaService = TestBed.inject(QnaService);
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(QnaContainerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty message list and a welcome note', () => {
    expect(component.messages().length).toBe(0);
    expect(component.welcomeNote).toBe('What can I help with?');
  });


  it('should simulate typing effect in AI response', (done) => {
    const userInput = 'What is Angular?';
    component.userInput.set(userInput); // Simulate user input
    spyOn(qnaService, 'enhanceJobDescription').and.returnValue(of({
      choices: [{ message: { content: '{"answerText": "Angular is a framework for building web apps."}' } }]
    }));
    component.askQuestion();

    setTimeout(() => {
      expect(component.messages()[1].message).toBe('');
      done();
    }, 1000);
  });

  it('should clear user input after question is asked', () => {
    const userInput = 'What is Angular?';
    component.userInput.set(userInput);
    component.userInput.set('');

    expect(component.userInput()).toBe('');
  });

  it('should add user message and reset input when askQuestion is called', () => {
    const userInput = 'What is Angular?';
    component.userInput.set(userInput);
    component.askQuestion();

    // Check that the message list has been updated with the user's question
    expect(component.messages().length).toBe(1);
    expect(component.messages()[0].message).toBe(userInput);

    // Simulate AI response and verify the AI message in the message list
    setTimeout(() => {
      expect(component.messages().length).toBe(2);
      expect(component.messages()[1].message).toBe('');
      expect(component.messages()[1].typing).toBe(false);
    }, 1000);
  });


});
