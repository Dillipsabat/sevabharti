import { Component, OnInit } from '@angular/core';
import {MobileService} from '../../service/mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css'],
  
})
export class OtpverificationComponent implements OnInit {

  otp:number;
  constructor(private router:Router,private mobile:MobileService) 
  { }
verify1(otp)
{
var pass=localStorage.getItem('OTP');
var pass1=localStorage.getItem('OTP1');

if(otp==pass||pass1)
{
this.router.navigate(['userpanel']);
}
}
resend()
{
var mobile_no=Number(localStorage.getItem('mobile'));
this.mobile.get(mobile_no).subscribe(
  (res:any)=>{
    //alert(res.data);
    if(res.status=='success')
    {
    localStorage.setItem('OTP1',res.data.OTP);
    localStorage.setItem('mobile1',res.data.mb);
    this.router.navigate(['otpverification']);
  }
  else{
    alert('error');
  }
  });
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
