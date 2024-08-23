import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAgendaconsultasComponent } from './app-agendaconsultas.component';

describe('AppAgendaconsultasComponent', () => {
  let component: AppAgendaconsultasComponent;
  let fixture: ComponentFixture<AppAgendaconsultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAgendaconsultasComponent]
    });
    fixture = TestBed.createComponent(AppAgendaconsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
