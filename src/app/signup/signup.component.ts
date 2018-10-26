import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: any;

  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[1-9]\\d{9}')]),
    dob: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', Validators.required)
  }, PasswordValidator.passwordMatch);

  constructor(private signupservice: SignupService,
    private router: Router) {
  }

  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get password() {
    return this.form.get('password');
  }
  get dob() {
    return this.form.get('dob');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }


  signin(form: any) {
    let dob: Date = new Date(form.dob.year, form.dob.month, form.dob.day);
    form.dob = dob;
    this.signupservice.saveUser(form).subscribe(response => {
      //this.signinForm.reset();
    });
  }

}
