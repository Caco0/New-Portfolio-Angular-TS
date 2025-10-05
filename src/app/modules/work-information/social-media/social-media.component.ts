import { Component } from '@angular/core';
import { HeaderComponent } from '../../portfolio/components/header/header.component';
import { FooterComponent } from '../../portfolio/components/footer/footer.component';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {

}
