import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegistrationComponent } from './resume-registration.component';

describe('HomeRegistrationComponent', () => {
  let component: HomeRegistrationComponent;
  let fixture: ComponentFixture<HomeRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeRegistrationComponent]
    });
    fixture = TestBed.createComponent(HomeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
