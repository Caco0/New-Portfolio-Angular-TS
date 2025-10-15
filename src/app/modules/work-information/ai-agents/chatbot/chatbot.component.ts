import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  userInput: string = '';
  messages: { role: string; content: string }[] = [];
  loading = false;

  // 🔗 Endereço do backend Flask
  private apiUrl = 'http://127.0.0.1:5000/chat';

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userMessage = this.userInput;
    this.messages.push({ role: 'user', content: userMessage });
    this.loading = true;

    this.http.post<{ reply: string }>(this.apiUrl, { message: userMessage }).subscribe({
      next: (res) => {
        this.messages.push({ role: 'assistant', content: res.reply });
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
        this.messages.push({
          role: 'assistant',
          content: '⚠️ Erro ao se comunicar com o servidor Flask.'
        });
        this.loading = false;
      }
    });

    this.userInput = '';
  }
}
