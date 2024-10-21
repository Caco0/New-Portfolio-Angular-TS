import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMinComponent } from './sobre-min.component';

describe('SobreMinComponent', () => {
  let component: SobreMinComponent;
  let fixture: ComponentFixture<SobreMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
