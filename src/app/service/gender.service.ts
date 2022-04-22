import { Injectable } from '@angular/core';
import { Gender } from '../interfaces/gender';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private httpclient:HttpClient) 
  { }
  get():Observable<Gender[]>
  {
    return this.httpclient.get<Gender[]>('http://localhost:3000/gender');
  }
}
