import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IUser, IUserForm} from '../../../../models/interfaces';
import {generateUserForm} from '../../../../helpers/form-helpers';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  form: FormGroup<IUserForm> = generateUserForm();

  constructor(private userService: UserService, private router: Router) {
  }

  continue() {
    this.userService.user = this.form.value as IUser;
    this.router.navigate(['/weather-updates']);
  }
}
