import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUseradimComponent } from './app-useradim.component';

describe('AppUseradimComponent', () => {
  let component: AppUseradimComponent;
  let fixture: ComponentFixture<AppUseradimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppUseradimComponent]
    });
    fixture = TestBed.createComponent(AppUseradimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
