import {Component, Input} from '@angular/core';
import {IWeatherItem} from '../../../../models/interfaces';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  @Input() weatherItems?: IWeatherItem[] | null = [];
}
