import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdmimComponent } from './app-admim.component';

describe('AppAdmimComponent', () => {
  let component: AppAdmimComponent;
  let fixture: ComponentFixture<AppAdmimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAdmimComponent]
    });
    fixture = TestBed.createComponent(AppAdmimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
