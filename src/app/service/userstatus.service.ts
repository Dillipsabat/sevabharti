import { Injectable } from '@angular/core';
import { Userstatus } from '../interfaces/userstatus';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstatusService {

  constructor(private httpclient:HttpClient) 
  { }
  get():Observable<Userstatus[]>
  {
    return this.httpclient.get<Userstatus[]>('http://localhost:3000/userstatus');
  }
}
