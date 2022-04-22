import { Component, OnInit } from '@angular/core';
import {Mobile} from '../../interfaces/mobile';
import {Mobile1Service} from '../../service/mobile1.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-uservalidation1',
  templateUrl: './uservalidation1.component.html',
  styleUrls: ['./uservalidation1.component.css']
})
export class Uservalidation1Component implements OnInit {

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
            // alert(res.data.OTP);
            // alert(res.data.mb);
          localStorage.setItem('UserOTP',res.data.OTP);
          localStorage.setItem('mobileno',res.data.mb);
          this.router.navigate(['otpvalidation1']);
          //clear rec
          this.mobile_no=null;
          }
          else{
            alert('you are already register goto benificiary request page and place request');
            this.router.navigate(['benfsignup']);
        
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
 