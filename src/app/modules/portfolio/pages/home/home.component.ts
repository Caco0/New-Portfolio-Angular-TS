import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import Typed from 'typed.js';

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
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private typed?: Typed;

  ngAfterViewInit(): void {
    // Delay leve para garantir que o DOM foi renderizado completamente
    setTimeout(() => {
      const el = document.querySelector('.multiple-text');
      if (el) {
        this.typed = new Typed('.multiple-text', {
          strings: [
            'Graduando em Inteligência Artificial Aplicada',
            'AI Agentes Developer',
            'AI Prompt Engineer',
            'Frontend Developer',
            'Angular Developer',
            'Social Media'
          ],
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 1000,
          loop: false,
          showCursor: true,
          cursorChar: '|',

        });
      } else {
        console.error('Elemento ".multiple-text" não encontrado!');
      }
    }, 300); // meio segundo é o suficiente
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }
}

