import { Injectable } from '@angular/core';
import {Bloodbank} from '../interfaces/bloodbank';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloodbankService {

  constructor(private httpclient:HttpClient) 
  { 
    
  }
  getbloodbank():Observable<Bloodbank[]>
  {
    return this.httpclient.get<Bloodbank[]>('http://localhost:3000/bloodbank');
  }
  getbyid(username:string,password:string):Observable<Bloodbank>
  {
    return this.httpclient.get<Bloodbank>('http://localhost:3000/bloodbank'+"/"+username+"/"+password);
  }
  addbloodbank(binfo:Bloodbank):Observable<string>
  {
    return this.httpclient.post<string>('http://localhost:3000/bloodbank',binfo);
  }
}
