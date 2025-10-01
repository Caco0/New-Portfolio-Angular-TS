import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDeveloperComponent } from './web-developer.component';

describe('WebDeveloperComponent', () => {
  let component: WebDeveloperComponent;
  let fixture: ComponentFixture<WebDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
