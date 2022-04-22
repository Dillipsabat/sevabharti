import { Injectable } from '@angular/core';
import { District } from '../interfaces/district';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private httpclient:HttpClient) 
  { }
  get(did):Observable<District>
  {
    return this.httpclient.get<District>('http://localhost:3000/area'+"/"+did);
  }
}
