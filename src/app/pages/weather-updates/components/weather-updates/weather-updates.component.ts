import {Component, OnInit} from '@angular/core';
import {ICountry, IWeatherItem} from '../../../../models/interfaces';
import {DropdownChangeEvent} from 'primeng/dropdown';
import {WeatherService} from '../../../../services/weather.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Observable, of} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-weather-updates',
  templateUrl: './weather-updates.component.html',
  styleUrls: ['./weather-updates.component.scss']
})
export class WeatherUpdatesComponent implements OnInit {

  constructor(private weatherService: WeatherService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  countries: ICountry[] = [
    {name: 'Israel', code: 'IL'},
    {name: 'Australia', code: 'AU'},
    {name: 'Brazil', code: 'BR'},
    {name: 'France', code: 'FR'},
    {name: 'Germany', code: 'DE'},
    {name: 'Japan', code: 'JP'},
    {name: 'Spain', code: 'ES'}
  ];
  selectedCountry?: ICountry;
  weatherItems$?: Observable<IWeatherItem[]>;

  ngOnInit() {
    this.route.params.pipe(
      untilDestroyed(this)
    ).subscribe((params: Params) => {
      this.selectedCountry = this.countries.find((c: ICountry) => c.name === params['country']);
      this.weatherItems$ = this.selectedCountry ? this.weatherService.loadWeatherByCountry(this.selectedCountry?.name) : of([]);
    })
  }

  onSelectCountry(event: DropdownChangeEvent) {
   this.router.navigate([`weather-updates/${event.value ? event.value.name : ''}`]);
  }

}
