import { Injectable } from '@angular/core';
import { State } from '../interfaces/state';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private httpclient:HttpClient) 
  { }
  get(cid):Observable<State>
  {
    return this.httpclient.get<State>('http://localhost:3000/state'+"/"+cid);
  }
}
