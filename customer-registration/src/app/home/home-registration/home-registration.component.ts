import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home-registration',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home-registration.component.html',
  styleUrls: ['./home-registration.component.scss']
})
export class HomeRegistrationComponent {

}
