import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HeaderComponent } from 'src/app/home/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-residential-registration',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, HeaderComponent, RouterLink],
  templateUrl: './residential-registration.component.html',
  styleUrls: ['./residential-registration.component.scss']
})
export class ResidentialRegistrationComponent {
  @Input() name!: string;

}
