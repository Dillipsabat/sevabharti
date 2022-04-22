import { Injectable } from '@angular/core';
import {Country} from '../interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpclient:HttpClient) 
  { }
  get():Observable<Country[]>
  {
    return this.httpclient.get<Country[]>('http://localhost:3000/country');
  }
}
