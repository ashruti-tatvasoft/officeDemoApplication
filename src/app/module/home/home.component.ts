import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type FormType = {
  lastName: FormControl<string|null>,
  firstName: FormControl<string|null>,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  count = 0;
  submitFormData:boolean = false
  submitForm = new FormGroup<FormType>({
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required)
  });
  get ctrl(): FormType { return this.submitForm.controls; }
  submit = () => {
    this.submitFormData = true;
    this.submitForm.markAllAsTouched();
    if (this.submitForm.valid) {
      this.count = this.count + 1;
    }
  }
}
