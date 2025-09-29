import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HeaderComponent } from 'src/app/home/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-professional-registration',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, HeaderComponent, RouterLink],
  templateUrl: './professional-registration.component.html',
  styleUrls: ['./professional-registration.component.scss']
})
export class ProfessionalRegistrationComponent {
  @Input() name!: string;

}
