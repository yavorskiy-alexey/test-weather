import {Injectable} from '@angular/core';
import {IUser} from '../models/interfaces';
import {StorageItem} from '../models/enums';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) {
  }

  get user(): IUser | null {
    const user = localStorage.getItem(StorageItem.USER);
    return user ? JSON.parse(user) : null;
  }

  set user(user: IUser) {
    localStorage.setItem(StorageItem.USER, JSON.stringify(user));
  }


  logOut() {
    localStorage.removeItem(StorageItem.USER);
    this.router.navigate(['/dashboard']);
  }
}
