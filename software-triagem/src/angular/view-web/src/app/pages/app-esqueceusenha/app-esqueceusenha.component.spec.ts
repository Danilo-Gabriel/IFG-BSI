import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEsqueceusenhaComponent } from './app-esqueceusenha.component';

describe('AppEsqueceusenhaComponent', () => {
  let component: AppEsqueceusenhaComponent;
  let fixture: ComponentFixture<AppEsqueceusenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppEsqueceusenhaComponent]
    });
    fixture = TestBed.createComponent(AppEsqueceusenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
