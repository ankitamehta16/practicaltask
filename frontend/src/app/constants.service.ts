import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  readonly API_URL: string = environment.apiUrl + "/";
  readonly APP_API: string = this.API_URL + "api" + "/";
  readonly VISITORS: string = this.APP_API + "visitors";
}
