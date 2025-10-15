import { Component } from '@angular/core';
import { HeaderComponent } from '../../portfolio/components/header/header.component';
import { FooterComponent } from '../../portfolio/components/footer/footer.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@Component({
  selector: 'app-ai-agents',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ChatbotComponent],
  templateUrl: './ai-agents.component.html',
  styleUrls: ['./ai-agents.component.scss']
})
export class AiAgentsComponent {

}
