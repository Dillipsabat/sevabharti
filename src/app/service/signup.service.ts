import { Injectable } from '@angular/core';
import {Signup} from '../interfaces/signup';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { Signup1 } from '../interfaces/signup1';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  sinfo:Signup=new Signup();
  // sinfo:Signup=new Signup();
  constructor(private _httpclient:HttpClient) 
  {
   
   }
   getdetails():Observable<Signup[]>
   {
    return this._httpclient.get<Signup[]>('http://localhost:3000/user');
   }
   get():Observable<Signup1[]>
   {
     return this._httpclient.get<Signup1[]>('http://localhost:3000/user1');
   }
   getdetail(pid):Observable<Signup[]>
   {
    return this._httpclient.get<Signup[]>('http://localhost:3000/user'+"/"+pid);
   }
   delete(pid)
   {
     return this._httpclient.delete('http://localhost:3000/user'+"/"+pid)
   }
  postdetails(pinfo:Signup):Observable<string>
  {
return this._httpclient.post<string>('http://localhost:3000/usersignup',pinfo);
  }
}
