import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/app/interfaces/mobile';
import { Mobile1Service } from '../../service/mobile1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpvalidation1',
  templateUrl: './otpvalidation1.component.html',
  styleUrls: ['./otpvalidation1.component.css']
})
export class Otpvalidation1Component implements OnInit {

  prods:Mobile[];
  otp:number;
  mobileno:number;
  rec:Mobile=new Mobile();
  constructor(private mobile:Mobile1Service,private router:Router) 
  {
    
   }
   
    verify(otp,rec)
    {
      var pass=localStorage.getItem('UserOTP');
      
      if(pass==otp)
      {
        alert('Your validation successfull then fill registration form');
        this.router.navigate(['benfsignup']);
        this.mobile.post(rec).subscribe(
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
      this.mobile.get(mobile_no).subscribe(
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
 

  ngOnInit(): void {
  }
 
  keyPress(event: any) {
    const pattern = /[0-6\+\-\ ]/;
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
