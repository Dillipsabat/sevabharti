import { Injectable } from '@angular/core';
import {Mobile} from '../interfaces/mobile';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Mobile1Service {

  constructor(private _httpclient:HttpClient) 
  { }
  get(pnumber:number)
  {
   //  alert(pnumber)
    return this._httpclient.get('http://localhost:3000/validateuser'+"/"+pnumber);
  }
  post(pnumber:Mobile)
  {
    return this._httpclient.post('http://localhost:3000/mobile',pnumber);
  }
}