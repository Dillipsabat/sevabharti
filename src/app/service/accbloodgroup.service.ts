import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accbloodgroup } from '../interfaces/accbloodgroup';

@Injectable({
  providedIn: 'root'
})
export class AccbloodgroupService {

  constructor(private httpclient:HttpClient) { }
  get():Observable<Accbloodgroup[]>
  {
    return this.httpclient.get<Accbloodgroup[]>('http://localhost:3000/accbloodgroup');
  }
}
