import { Component } from '@angular/core';

//Components of home
import { HeaderComponent } from '../../components/header/header.component';
import { ContateMeComponent } from '../../components/contate-me/contate-me.component';
import { SobreMinComponent } from '../../components/sobre-min/sobre-min.component';
import { ServicesComponent } from '../../components/services/services.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SobreMinComponent,
    ServicesComponent,
    SkillsComponent,
    PortfolioComponent,
    ContateMeComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
