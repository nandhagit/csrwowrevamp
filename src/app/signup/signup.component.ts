import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any;
  signinForm;
  firstname;
  lastname;
  email;
  phonenum;
  password;
  repassword;


  constructor(private signupservice: SignupService,private router: Router) {
  }

  ngOnInit() {
  }

  getError() {
    let email = this.signinForm.controls.email
    return email.hasError('required') ? 'You must enter a value' :
      email.hasError('email') ? 'Not a valid email' :
        '';
  }

  signin(form: any) {
    let dob: Date = new Date(form.dob.year, form.dob.month, form.dob.day);
    form.dob = dob;
    this.signupservice.saveUser(form).subscribe(response => {
      //this.signinForm.reset();
    })
  }

}
