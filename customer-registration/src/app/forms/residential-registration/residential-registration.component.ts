import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HeaderComponent } from 'src/app/home/header/header.component';

@Component({
  selector: 'app-residential-registration',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, HeaderComponent],
  templateUrl: './residential-registration.component.html',
  styleUrls: ['./residential-registration.component.scss']
})
export class ResidentialRegistrationComponent {

}
