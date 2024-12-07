import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultacedulaComponent } from './consultacedula.component';

describe('ConsultacedulaComponent', () => {
  let component: ConsultacedulaComponent;
  let fixture: ComponentFixture<ConsultacedulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultacedulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultacedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
