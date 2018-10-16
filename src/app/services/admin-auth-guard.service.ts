import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(){
    let user = this.authService.currentUser;
    if(user && user.scopes.includes('ADMIN'))
      return true;
    this.router.navigate(['/home']);
    return false;
  }
}
