import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../home/header/header.component';
import { PersonRegistrationComponent } from 'src/app/forms/person-registration/person-registration.component';
import { ProfessionalRegistrationComponent } from 'src/app/forms/professional-registration/professional-registration.component';
import { ResidentialRegistrationComponent } from 'src/app/forms/residential-registration/residential-registration.component';

@Component({
  selector: 'app-resume-registration',
  standalone: true,
  imports: [CommonModule, HeaderComponent, PersonRegistrationComponent, ResidentialRegistrationComponent,  ProfessionalRegistrationComponent],
  templateUrl: './resume-registration.component.html',
  styleUrls: ['./resume-registration.component.scss']
})
export class ResumeRegistrationComponent {

}
