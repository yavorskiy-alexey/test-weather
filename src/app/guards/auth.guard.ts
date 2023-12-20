import {Injectable} from '@angular/core';
import {CanActivate, Router,} from '@angular/router';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private userService: UserService) {
  }

  canActivate() {
    if (this.userService.user) {
      return true;
    } else {
      this.router.navigate([`/dashboard`]);
      return false;
    }
  }
}
