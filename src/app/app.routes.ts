import { Routes } from '@angular/router';
import { AiAgentsComponent } from './modules/work-information/ai-agents/ai-agents.component';

// Component Pages
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { AiPromptComponent } from './modules/work-information/ai-prompt/ai-prompt.component';
import { SocialMediaComponent } from './modules/work-information/social-media/social-media.component';
import { WebDeveloperComponent } from './modules/work-information/web-developer/web-developer.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'ai-agents',
    component: AiAgentsComponent
  },
  { path: 'ai-prompt',
    component: AiPromptComponent
  },
  { path: 'social-media',
    component: SocialMediaComponent
  },
  { path: 'web-developer',
    component: WebDeveloperComponent
  }
];
