import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QnaService {
  gptChatCompletionEndpoint = 'https://api.openai.com/v1/chat/completion'
  #http = inject(HttpClient);

  public enhanceJobDescription<T>(input: string): Observable<T> {
    const body = {
      model: "gpt-4o",
      response_format: {
        type: "json_object",
      },
      messages: [
        {
          role: "system",
          content: `
      You are an expert assistant for a Q&A platform, helping users by answering questions accurately and clearly.
      Please respond to each question with precise information, keeping explanations concise and easy to understand.
      If additional context or examples would be helpful, please include them.
      Always return the response in JSON format as follows: { answerText: "Your answer here" }.
    `
        },
        {
          role: "user",
          content: input
        }
      ]

    };
    return this.#http.post<T>('http://localhost:3001/api/openai', body)
  }
}
