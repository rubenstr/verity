import {Routes} from '@angular/router';
import { ResumeRegistrationComponent } from './forms/resume-registration/resume-registration.component';
import { PersonRegistrationComponent } from './forms/person-registration/person-registration.component'; 
import { ProfessionalRegistrationComponent } from './forms/professional-registration/professional-registration.component'; 
import { ResidentialRegistrationComponent } from './forms/residential-registration/residential-registration.component'; 

export const routes: Routes = [

  {
    path: '',
    component: PersonRegistrationComponent,
   //loadComponent: () => import('./forms/person-registration/person-registration.component').then(m => m.PersonRegistrationComponent),
    title: 'Registro Pessoal',
  },
  {
    path: '/residencial',
    loadComponent: () => import('./forms/residential-registration/residential-registration.component').then(m => m.ResidentialRegistrationComponent),
    title: 'Registro Residencial',
  },
  {
    path: '/profissional',
    loadComponent: () => import('./forms/professional-registration/professional-registration.component').then(m => m.ProfessionalRegistrationComponent),
    title: 'Registro Profissional',
  },
    {
    path: '/resume',
    title: 'Resume page',
     loadComponent: () => import('./forms/resume-registration/resume-registration.component').then(m => m.ResumeRegistrationComponent),
  },
];
