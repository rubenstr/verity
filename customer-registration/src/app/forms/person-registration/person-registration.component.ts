import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HeaderComponent } from 'src/app/home/header/header.component';
import { RouterLink } from "@angular/router";
import { StateServiceService } from 'src/app/store/state.service.service';
import { ReactiveFormsModule} from '@angular/forms';
import { SharedFormService } from 'src/app/services/shared-form.service';

interface User {
  nome: string;
  dataNascimento: string;
  cpf: string;
  telefone:string;
}

@Component({
  selector: 'app-person-registration',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, HeaderComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './person-registration.component.html',
  styleUrls: ['./person-registration.component.scss']
})
export class PersonRegistrationComponent {

  constructor(public userForm: SharedFormService) {}

  userModel = signal<User>({ nome: '', dataNascimento: '', cpf:'', telefone:''  });
  storeService = inject(StateServiceService);
  name!: any;
  state = this.storeService.getState();
 
 @Input() titlename!: string;

 saveDataForm(): void {
  if (this.userForm.form.valid) {
      const user = this.userForm.form.getRawValue();
      this.storeService.setState(user);
  } 
}

}
