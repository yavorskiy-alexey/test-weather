import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IWeatherItem} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  loadWeatherByCountry(countryName: string): Observable<IWeatherItem[]> {
    return this.http.get<IWeatherItem[]>(`http://localhost:4000/weather?country=${countryName}`);
  }
}
