import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEsqueceuSenhaComponent } from './app-esqueceu-senha.component';

describe('AppEsqueceuSenhaComponent', () => {
  let component: AppEsqueceuSenhaComponent;
  let fixture: ComponentFixture<AppEsqueceuSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppEsqueceuSenhaComponent]
    });
    fixture = TestBed.createComponent(AppEsqueceuSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
