import {Routes} from '@angular/router';
import {AuthGuard} from '../guards/auth.guard';

export const AUTH_LAYOUT_ROUTES: Routes = [
  {
    path: 'weather-updates',
    loadChildren: () =>
      import('../pages/weather-updates/weather-updates.module').then(
        (m) => m.WeatherUpdatesModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'weather-updates/:country',
    loadChildren: () =>
      import('../pages/weather-updates/weather-updates.module').then(
        (m) => m.WeatherUpdatesModule
      ),
    canActivate: [AuthGuard],
  },
];
