import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {UnAuthLayoutComponent} from './layouts/unauth-layout/un-auth-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {UN_AUTH_LAYOUT_ROUTES} from './routes/unauth-layout.routes';
import {AUTH_LAYOUT_ROUTES} from './routes/auth-layout.routes';

const REDIRECT_ROUTE: Route = {
  path: '**',
  redirectTo: '',
};

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: '',
    component: UnAuthLayoutComponent,
    children: UN_AUTH_LAYOUT_ROUTES,
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: AUTH_LAYOUT_ROUTES,
  },
  REDIRECT_ROUTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
