import { Component, OnInit } from '@angular/core';
import {Enquiry} from '../../interfaces/enquiry';
import { EnquiryService } from 'src/app/service/enquiry.service';
@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit 
{
prods:Enquiry[];
rec:Enquiry=new Enquiry();
  constructor(private enquiry:EnquiryService) 
  { }
add(rec:Enquiry)
{
  this.enquiry.addenquiry(rec).subscribe((res:any)=>{

    if(res=='success')
    {
    //clear rec
    alert('Enquiry sent successfully');
 }
 else{
   alert('error')
 }
  },()=>{
    alert('Enquiry sent successfully');
    this.rec.enquiry_name="";
    this.rec.enquiry_mobileno=null;
    this.rec.enquiry_message="";
  });
}
  ngOnInit(): void {
  }

}
