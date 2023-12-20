import {IUser, IUserForm} from '../models/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export const generateUserForm = (user?: IUser): FormGroup<IUserForm> => {
  return new FormGroup({
    firstName: new FormControl(user?.firsName, [Validators.required]),
    lastName: new FormControl(user?.lastName, [Validators.required]),
    email: new FormControl(user?.email, [Validators.required, Validators.email])
  });
};
