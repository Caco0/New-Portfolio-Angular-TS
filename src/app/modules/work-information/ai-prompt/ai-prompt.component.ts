import { Component } from '@angular/core';
import { FooterComponent } from '../../portfolio/components/footer/footer.component';
import { HeaderComponent } from '../../portfolio/components/header/header.component';

@Component({
  selector: 'app-ai-prompt',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ai-prompt.component.html',
  styleUrls: ['./ai-prompt.component.scss']
})
export class AiPromptComponent {

}
