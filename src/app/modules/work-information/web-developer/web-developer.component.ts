import { Component } from '@angular/core';
import { HeaderComponent } from '../../portfolio/components/header/header.component';
import { FooterComponent } from '../../portfolio/components/footer/footer.component';

@Component({
  selector: 'app-web-developer',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './web-developer.component.html',
  styleUrls: ['./web-developer.component.scss']
})
export class WebDeveloperComponent {

}
