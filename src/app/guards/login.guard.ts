import {Injectable} from '@angular/core';
import {CanActivate, Router,} from '@angular/router';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {
  }

  canActivate() {
    if (this.userService.user) {
      this.router.navigate([`/weather-updates`]);
      return false;
    } else {
      return true;
    }
  }
}
