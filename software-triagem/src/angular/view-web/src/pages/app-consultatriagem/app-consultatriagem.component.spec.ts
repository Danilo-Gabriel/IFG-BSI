import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsultatriagemComponent } from './app-consultatriagem.component';

describe('AppConsultatriagemComponent', () => {
  let component: AppConsultatriagemComponent;
  let fixture: ComponentFixture<AppConsultatriagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppConsultatriagemComponent]
    });
    fixture = TestBed.createComponent(AppConsultatriagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
