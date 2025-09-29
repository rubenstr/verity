import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HeaderComponent } from 'src/app/home/header/header.component';

@Component({
  selector: 'app-professional-registration',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, HeaderComponent],
  templateUrl: './professional-registration.component.html',
  styleUrls: ['./professional-registration.component.scss']
})
export class ProfessionalRegistrationComponent {

}
