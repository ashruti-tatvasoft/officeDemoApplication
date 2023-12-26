import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
type FormType = {
  address: FormControl<string|null>,
  username: FormControl<string|null>,
}

interface UserData {
  name: string,
  address: string
}
@Component({
  selector: 'app-about',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  submitFormData:boolean = false
  submitForm = new FormGroup<FormType>({
    username: new FormControl<string>('',Validators.required),
    address: new FormControl<string>('',Validators.required)
  });
  userData:UserData[] = [];
  get ctrl(): FormType { return this.submitForm.controls; }
  submit = () => {
    debugger
    this.submitFormData = true;
    this.submitForm.markAllAsTouched();
    if (this.submitForm.valid && this.ctrl.username.value && this.ctrl.address.value) {
      this.userData.push({
        name: this.ctrl.username.value,
        address: this.ctrl.address.value
      })
    }
  }
}
