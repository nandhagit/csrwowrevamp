import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
  NgForm
} from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm;
  username;
  password;
  invalidLogin: boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  signin(form: NgForm) {
    this.authService.authenticate(form).subscribe(response => {
      if (response) {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
      } else {
        this.invalidLogin = true;
      }
    })
    return false;
  }
}
