import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastraruserComponent } from './app-cadastraruser.component';

describe('AppCadastraruserComponent', () => {
  let component: AppCadastraruserComponent;
  let fixture: ComponentFixture<AppCadastraruserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCadastraruserComponent]
    });
    fixture = TestBed.createComponent(AppCadastraruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
