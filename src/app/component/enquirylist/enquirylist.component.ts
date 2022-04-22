import { Component, OnInit } from '@angular/core';
import {Enquiry} from '../../interfaces/enquiry';
import {EnquiryService} from '../../service/enquiry.service';

@Component({
  selector: 'app-enquirylist',
  templateUrl: './enquirylist.component.html',
  styleUrls: ['./enquirylist.component.css']
})
export class EnquirylistComponent implements OnInit {

  erods:Enquiry[];
  constructor(private enquiryservice:EnquiryService) 
  {
    this.enquiryservice.getenquiry().subscribe(
      (res:any)=>{this.erods=res;}
    );
   }

  ngOnInit(): void {
  }

}
