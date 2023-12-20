import {Routes} from '@angular/router';
import {LoginGuard} from '../guards/login.guard';

export const UN_AUTH_LAYOUT_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../app/pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [LoginGuard],
  }
];
