import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router,
    private modalService: NgbModal) { }

  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    const modalRef = this.modalService.open(LoginComponent);
    //modalRef.componentInstance.returnUrl = state.url;
    return false;
  }
}
