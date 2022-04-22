import { Injectable } from '@angular/core';
import {Admin} from '../interfaces/admin';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService 
{
  constructor(private _httpclient:HttpClient) 
  { }
  getadmindetails():Observable<Admin[]>
    {
      return this._httpclient.get<Admin[]>('http://localhost:3000/admin');
    }  
    getbyid(username:string,password:string):Observable<Admin>
    {
      return this._httpclient.get<Admin>('http://localhost:3000/admin'+"/"+username+"/"+password);
    }
}