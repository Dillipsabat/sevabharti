import { Injectable } from '@angular/core';
import {Enquiry} from '../interfaces/enquiry';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private httpclient:HttpClient) 
  { }
  getenquiry():Observable<Enquiry[]>
  {
    return this.httpclient.get<Enquiry[]>('http://localhost:3000/enquiry');
  }
  addenquiry(einfo:Enquiry):Observable<string>
  {
    return this.httpclient.post<string>('http://localhost:3000/enquiry',einfo);
  }
}
