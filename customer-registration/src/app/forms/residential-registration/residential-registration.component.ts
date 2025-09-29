import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HeaderComponent } from 'src/app/home/header/header.component';
import { RouterLink } from '@angular/router';
import { SharedFormService } from 'src/app/services/shared-form.service';
import { StateServiceService } from 'src/app/store/state.service.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-residential-registration',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, HeaderComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './residential-registration.component.html',
  styleUrls: ['./residential-registration.component.scss']
})
export class ResidentialRegistrationComponent {
  constructor(public userForm: SharedFormService) {}
  @Input() name!: string;
   storeService = inject(StateServiceService);

    saveDataForm(): void {

  if (this.userForm.form.valid) {
      const user = this.userForm.form.getRawValue();
      this.storeService.setState(user);
  } 
}

}
