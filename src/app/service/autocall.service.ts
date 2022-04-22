import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutocallService {

  constructor(private _httpclient:HttpClient) { }
  get()
  {
    return this._httpclient.get('http://localhost:3000/data');
  }
}
