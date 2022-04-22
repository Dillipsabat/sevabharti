import { Injectable } from '@angular/core';
import {Mobile} from '../interfaces/mobile';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private _httpclient:HttpClient) 
  { 

  }
 get(pnumber:number)
 {
  //  alert(pnumber)
   return this._httpclient.get('http://localhost:3000/verify_user'+"/"+pnumber);
 }
}
