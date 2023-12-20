import {FormControl} from '@angular/forms';


export interface IUser {
  firsName: string;
  lastName: string;
  email: string;
}

export interface IUserForm {
  firstName: FormControl<string | undefined | null>;
  lastName: FormControl<string | undefined | null>;
  email: FormControl<string | undefined | null>;
}

export interface ICountry {
  name: string,
  code: string
}

export interface IWeatherItem {
  content: string;
  contentSnippet: string;
  guid: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  isoDate: string;
}
