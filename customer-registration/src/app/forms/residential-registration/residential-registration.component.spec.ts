import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialRegistrationComponent } from './residential-registration.component';

describe('ResidentialRegistrationComponent', () => {
  let component: ResidentialRegistrationComponent;
  let fixture: ComponentFixture<ResidentialRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResidentialRegistrationComponent]
    });
    fixture = TestBed.createComponent(ResidentialRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
