import { Injectable } from '@angular/core';
import { Bloodtype } from '../interfaces/bloodtype';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloodtypeService {

  constructor(private httpclient:HttpClient) 
  { }
  get():Observable<Bloodtype[]>
  {
    return this.httpclient.get<Bloodtype[]>('http://localhost:3000/bloodtype');
  }
}
