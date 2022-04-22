import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/interfaces/signup';
import {SignupService} from '../../service/signup.service';
import { Router } from '@angular/router';
import { Signup1 } from 'src/app/interfaces/signup1';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.component.html',
  styleUrls: ['./donorlist.component.css']
})
export class DonorlistComponent implements OnInit {

  prods:Signup1[];
  constructor(private signupservice:SignupService) 
  {
    this.signupservice.getdetails().subscribe(
      (res:any)=>{this.prods=res.data;}
    );
   }
delete(user_mobile1:number)
{
  this.signupservice.delete(user_mobile1).subscribe(
    (res:any)=>{
      if(res.status=='success')
      {
        localStorage.setItem('usermobile',res.data.user_mobile1)
        alert('record deleted successfully');
        
      }
    }
  );
}


  ngOnInit(): void {
  }

}
