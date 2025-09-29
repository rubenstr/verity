import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../home/header/header.component';
import { StateServiceService } from 'src/app/store/state.service.service';
import { ReactiveFormsModule} from '@angular/forms';
import { SharedFormService } from 'src/app/services/shared-form.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume-registration',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './resume-registration.component.html',
  styleUrls: ['./resume-registration.component.scss']
})
export class ResumeRegistrationComponent {
   @ViewChild('formContainer') formContainer!: ElementRef;
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

  generatePDF() {
    const DATA = this.formContainer.nativeElement;

    html2canvas(DATA).then(canvas => {
      const imgWidth = 210; 
      const pageHeight = 297;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('formulario.pdf');
    });
  }

}
