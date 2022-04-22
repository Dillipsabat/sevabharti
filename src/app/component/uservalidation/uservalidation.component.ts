import { Component, OnInit } from '@angular/core';
import {Mobile} from '../../interfaces/mobile';
import {Mobile1Service} from '../../service/mobile1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uservalidation',
  templateUrl: './uservalidation.component.html',
  styleUrls: ['./uservalidation.component.css']
})
export class UservalidationComponent implements OnInit {

  rec:Mobile=new Mobile();
  mobile_no:number;
    constructor(private mobile:Mobile1Service,private router:Router) 
    { }
    generate(mobile_no:number)
    {
      this.mobile.get(mobile_no).subscribe(
        (res:any)=>{
          if(res.status=='success')
          {
            
            // alert(res.data.mb);
          // localStorage.setItem('UserOTP',res.data.OTP);
          localStorage.setItem('mobileno',res.data.mb);
          this.router.navigate(['otpvalidation']);
          //clear rec
          this.mobile_no=null;
          }
          else{
            alert('your mobile number already exist');
            this.mobile_no=null;
          }
        }
      );
    }
    

  ngOnInit(): void {
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
  
  
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
