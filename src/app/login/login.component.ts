import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { SignupService } from '../signup/signup.service';
import { ValidatorsService } from '../validators.service';
import { PasswordValidator } from '../signup/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm;
  invalidLogin: boolean = false;

  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email],
    this.validateEmailNotTaken.bind(this)
    ),
    phone: new FormControl('',
      [Validators.required,
      Validators.pattern('[1-9]\\d{9}')],
      this.validatePhNotTaken.bind(this)
    ),
    dob: new FormControl('', Validators.required),
    signinpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', Validators.required)
  }, PasswordValidator.passwordMatch);
  //@Input() returnUrl;
  constructor(
    private router: Router,
   // private route: ActivatedRoute,
    private authService: AuthService,
    public activeModal: NgbActiveModal,
    private signupservice: SignupService,
    private validatorService: ValidatorsService
  ) { }

  signin(form: NgForm) {
    this.authService.authenticate(form).subscribe(response => {
      if (response) {
        this.activeModal.close('Login Successful');
        //let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        //this.router.navigate([this.returnUrl || '/']);
      } else {
        this.invalidLogin = true;
      }
    });
    return false;
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
  get signinpassword() {
    return this.form.get('signinpassword');
  }
  get dob() {
    return this.form.get('dob');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }


  signup(form: any) {
    let dob: Date = new Date(form.dob.year, form.dob.month, form.dob.day);
    form.dob = dob;
    this.signupservice.saveUser(form).subscribe(
      response => {
        this.activeModal.close('Login Successful');
        this.router.navigate(['home']);
      },
      error => {
        this.form.reset();
        this.form.setErrors({ 'errorSaving': true });
      }
    );
  }


  validatePhNotTaken(control: AbstractControl) {
    return new Promise((resolve, reject) => {
      this.validatorService.checkPhoneNumber(control.value).subscribe(result => {
        if (result) {
          resolve({shouldBeUnique: true});
        } else {
          resolve(null);
        }
      });
    });
  }

  validateEmailNotTaken(control: AbstractControl) {
    return new Promise((resolve, reject) => {
      this.validatorService.checkEmail(control.value).subscribe(result => {
        if (result) {
          resolve({shouldBeUnique: true});
        } else {
          resolve(null);
        }
      });
    });
  }
}
