import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdministradorComponent } from './app-administrador.component';

describe('AppAdministradorComponent', () => {
  let component: AppAdministradorComponent;
  let fixture: ComponentFixture<AppAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAdministradorComponent]
    });
    fixture = TestBed.createComponent(AppAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
