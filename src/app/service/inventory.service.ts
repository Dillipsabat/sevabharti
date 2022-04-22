import { Injectable } from '@angular/core';
import {Feedback} from '../interfaces/feedback';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private _httpclient:HttpClient) 
  { 
   
  }
  getfeedback():Observable<Feedback[]>
  {
  return  this._httpclient.get<Feedback[]>('http://localhost:3000/feedback');
  }
  addfeedback(finfo:Feedback):Observable<string>
  {
return this._httpclient.post<string>('http://localhost:3000/feedback-insert',finfo);
  }
}
