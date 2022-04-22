import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloodgroup } from '../interfaces/bloodgroup';

@Injectable({
  providedIn: 'root'
})
export class BloodgroupService {

  constructor(private httpclient:HttpClient) 
  { }
  get():Observable<Bloodgroup[]>
  {
    return this.httpclient.get<Bloodgroup[]>('http://localhost:3000/bloodgroup');
  }
}
