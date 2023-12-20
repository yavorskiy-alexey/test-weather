import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {Route, RouterModule} from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    UserFormComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        InputTextModule,
        ReactiveFormsModule,
        ButtonModule
    ]
})
export class DashboardModule { }
