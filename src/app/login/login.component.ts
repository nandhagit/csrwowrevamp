import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm;
  invalidLogin: boolean = false;
  //@Input() returnUrl;
  constructor(
    private router: Router,
   // private route: ActivatedRoute,
    private authService: AuthService,
    public activeModal: NgbActiveModal
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
}
