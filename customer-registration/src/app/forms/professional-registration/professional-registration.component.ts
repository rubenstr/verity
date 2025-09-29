import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HeaderComponent } from 'src/app/home/header/header.component';
import { RouterLink } from '@angular/router';
import { StateServiceService } from 'src/app/store/state.service.service';
import { ReactiveFormsModule} from '@angular/forms';
import { SharedFormService } from 'src/app/services/shared-form.service';

@Component({
  selector: 'app-professional-registration',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, HeaderComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './professional-registration.component.html',
  styleUrls: ['./professional-registration.component.scss']
})
export class ProfessionalRegistrationComponent {
  constructor(public userForm: SharedFormService) {}
  @Input() name!: string;
  storeService = inject(StateServiceService);
  state = this.storeService.getState();

   saveDataForm(): void {
  if (this.userForm.form.valid) {
      const user = this.userForm.form.getRawValue();
      this.storeService.setState(user);
  } 
}

}
