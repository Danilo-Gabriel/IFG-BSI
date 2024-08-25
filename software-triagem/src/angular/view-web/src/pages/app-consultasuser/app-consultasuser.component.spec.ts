import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsultasuserComponent } from './app-consultasuser.component';

describe('AppConsultasuserComponent', () => {
  let component: AppConsultasuserComponent;
  let fixture: ComponentFixture<AppConsultasuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppConsultasuserComponent]
    });
    fixture = TestBed.createComponent(AppConsultasuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
