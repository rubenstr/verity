import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { HeaderComponent } from 'src/app/home/header/header.component';
import { RouterLink } from "@angular/router";
import { StateServiceService } from 'src/app/store/state.service.service';

interface User {
  name: string;
  dataNascimento: string;
  cpf: string;
  telefone:string;
}

@Component({
  selector: 'app-person-registration',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, HeaderComponent, RouterLink],
  templateUrl: './person-registration.component.html',
  styleUrls: ['./person-registration.component.scss']
})
export class PersonRegistrationComponent {
  userModel = signal<User>({ name: '', dataNascimento: '', cpf:'', telefone:''  });
  //userForm = form(this.userModel);
  storeService = inject(StateServiceService);
  name!: any;
  state = this.storeService.getState();
 
 @Input() titlename!: string;

 saveDataForm(event: Event): void {
  console.log(event)
    this.storeService.setState((event.target as HTMLInputElement).value);
  }
}
