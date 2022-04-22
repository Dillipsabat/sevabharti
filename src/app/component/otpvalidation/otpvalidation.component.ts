import { Component, OnInit } from '@angular/core';
import {Mobile} from '../../interfaces/mobile';
import {Mobile1Service} from '../../service/mobile1.service';
import {MobileService} from '../../service/mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpvalidation',
  templateUrl: './otpvalidation.component.html',
  styleUrls: ['./otpvalidation.component.css']
})
export class OtpvalidationComponent implements OnInit {

  prods:Mobile[];
otp:number;
mobileno:number;
rec:Mobile=new Mobile();
constructor(private mobile1:Mobile1Service,private router:Router) 
{
  
 }
 
  verify(otp,rec)
  {
    var pass=localStorage.getItem('UserOTP');
    var pass1=localStorage.getItem('UserOTP1')
    if(otp==pass1||pass)
    {
      alert('Your validation successfull then fill registration form');
      this.router.navigate(['signup']);
      this.mobile1.post(rec).subscribe(
        (res:any)=>{
        if(res.status=='success')
        {
          this.prods.push(rec);
          // this.router.navigate(['signup']);
        }
        else{
          alert('error');
        }
        }
      );
      
    }
    else{
      alert('error');
    }
  }
  resend()
  {
    var mobile_no=Number(localStorage.getItem('mobileno'));
    // alert(mobile_no);
    this.mobile1.get(mobile_no).subscribe(
      (res:any)=>{
        if(res.status=='success')
        {
          // alert(res.data.OTP);
          // alert(res.data.mb);
        localStorage.setItem('UserOTP1',res.data.OTP);
        localStorage.setItem('mobileno1',res.data.mb);
         this.router.navigate(['otpvalidation']);
        }
        else{
          alert('you are already register goto login page and login');
        }
      }
    );
  }
  // verify(otp)
  // {
  //   var pass=localStorage.getItem('UserOTP');
  //   var pass1=Number(localStorage.getItem('mobileno'));
  //   if(pass==otp)
  //   {
  //     alert('Your validation successfull then fill registration form');
  //     this.router.navigate(['signup']);
  //     this.mobile.post(pass1).subscribe(
  //       (res:any)=>{
  //       if(res.status=='success')
  //       {
  //       this.prods.push(pass1);
  //       this.router.navigate(['signup']);
  //       }
  //       else{
  //         alert('error');
  //       }
  //       }
  //     );
      
  //   }
  //   else{
  //     alert('error');
  //   }
  // }


  ngOnInit(): void {
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
  
  
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  keyPress1(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
  
  
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
