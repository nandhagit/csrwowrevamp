import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
  NgForm
} from "@angular/forms";
import {AuthService} from '../auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm;
  email;
  password;
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}
  signin(form: NgForm) {
    this.authService.authenticate(form);
    return false;
  }
}
