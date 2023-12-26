import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type FormType = {
  number2: FormControl<number|null>,
  number1: FormControl<number|null>,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  answer = 0;
  submitFormData:boolean = false
  submitForm = new FormGroup<FormType>({
    number1: new FormControl<number>(0,Validators.required),
    number2: new FormControl<number>(0,Validators.required)
  });
  
  get ctrl(): FormType { return this.submitForm.controls; }
  
  Addition = () => {
    this.submitFormData = true;
    this.submitForm.markAllAsTouched();
    if (this.submitForm.valid && this.submitForm.controls['number1'].value && this.submitForm.controls['number2'].value) {
      this.answer = Number(this.submitForm.controls['number1'].value) + Number(this.submitForm.controls['number2'].value);
    }
  }
  
  Subtraction = () => {
    this.submitFormData = true;
    this.submitForm.markAllAsTouched();
    if (this.submitForm.valid && this.submitForm.controls['number1'].value && this.submitForm.controls['number2'].value) {
      this.answer =  Number(this.submitForm.controls['number1'].value) - Number(this.submitForm.controls['number2'].value);;
    }
  }

  Multiplication = () => {
    this.submitFormData = true;
    this.submitForm.markAllAsTouched();
    if (this.submitForm.valid && this.submitForm.controls['number1'].value && this.submitForm.controls['number2'].value) {
      this.answer =  Number(this.submitForm.controls['number1'].value) * Number(this.submitForm.controls['number2'].value);;
    }
  }

  Division = () => {
    this.submitFormData = true;
    this.submitForm.markAllAsTouched();
    if (this.submitForm.valid && this.submitForm.controls['number1'].value && this.submitForm.controls['number2'].value) {
      this.answer =  Number(this.submitForm.controls['number1'].value) / Number(this.submitForm.controls['number2'].value);;
    }
  }

  Percentage = () => {
    this.submitFormData = true;
    this.submitForm.markAllAsTouched();
    if (this.submitForm.valid && this.submitForm.controls['number1'].value && this.submitForm.controls['number2'].value) {
      this.answer = (Number(this.submitForm.controls['number1'].value) / 100) * Number(this.submitForm.controls['number2'].value);
    }
  }
}
