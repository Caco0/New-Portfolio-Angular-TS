import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContateMeComponent } from './contate-me.component';

describe('ContateMeComponent', () => {
  let component: ContateMeComponent;
  let fixture: ComponentFixture<ContateMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContateMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContateMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
