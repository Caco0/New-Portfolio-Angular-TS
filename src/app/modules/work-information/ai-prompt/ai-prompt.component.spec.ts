import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPromptComponent } from './ai-prompt.component';

describe('AiPromptComponent', () => {
  let component: AiPromptComponent;
  let fixture: ComponentFixture<AiPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
