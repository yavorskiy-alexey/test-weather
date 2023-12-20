import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherUpdatesComponent} from './components/weather-updates/weather-updates.component';
import {Route, RouterModule} from '@angular/router';
import {HeaderComponent} from '../../shared/components/header/header.component';
import { WeatherComponent } from './components/weather/weather.component';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';

const routes: Route[] = [
  {
    path: '',
    component: WeatherUpdatesComponent
  },
];

@NgModule({
  declarations: [
    WeatherUpdatesComponent,
    WeatherComponent
  ],
    imports: [
        CommonModule,
        HeaderComponent,
        RouterModule.forChild(routes),
        DropdownModule,
        FormsModule,
        CardModule
    ]
})
export class WeatherUpdatesModule {}
