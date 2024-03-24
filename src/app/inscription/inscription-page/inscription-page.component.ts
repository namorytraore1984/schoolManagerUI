import { Component, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { InscriptionFormComponent } from '../inscription-form/inscription-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressBarComponent } from '../../core/components/progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inscription-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    InscriptionFormComponent,
    ProgressBarComponent
  ],
  templateUrl: './inscription-page.component.html',
  styleUrl: './inscription-page.component.css'
})
export class InscriptionPageComponent {

  @ViewChild("inscripyionForm")
  inscripyionForm?: InscriptionFormComponent;

  isShowProgressBar = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: [this.inscripyionForm?.inscriptionForm.valid, Validators.requiredTrue],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;

  constructor(private _formBuilder: FormBuilder) {}

  submitRegistration() {
    this.isShowProgressBar = true;
    setTimeout(() => {
      this.isShowProgressBar=false;
    }, 4000);
  }

}
