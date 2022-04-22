import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Benfsignup } from '../interfaces/benfsignup';
import { Benfsignup1 } from '../interfaces/benfsignup1';

@Injectable({
  providedIn: 'root'
})
export class BenfsignupService {

  constructor(private httpclient:HttpClient) 
  { }
  get():Observable<Benfsignup1[]>
  {
    return this.httpclient.get<Benfsignup1[]>('http://localhost:3000/benf');
  }
  getbyid(pid):Observable<Benfsignup>
  {
    return this.httpclient.get<Benfsignup>('http://localhost:3000/benf'+"/"+pid);
  }
  post(pinfo:Benfsignup):Observable<string>
  {
    return this.httpclient.post<string>('http://localhost:3000/benfsignup',pinfo);
  }
}
