import { Component, OnInit } from '@angular/core';
import {Mobile} from '../../interfaces/mobile';
import {MobileService} from '../../service/mobile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobilevalidation',
  templateUrl: './mobilevalidation.component.html',
  styleUrls: ['./mobilevalidation.component.css']
})
export class MobilevalidationComponent implements OnInit {

  mrods:Mobile[];
  mrec:Mobile=new Mobile();
  mrec1:number;
    constructor(private mobile:MobileService,private router:Router) { }
  change1(mrec)
  {
    
  this.mobile.get(mrec.mobile_no).subscribe(
    (res:any)=>{
      //alert(res.data);
      if(res.status=='success')
      {
      localStorage.setItem('OTP',res.data.OTP);
      localStorage.setItem('mobile',res.data.mb);
      this.router.navigate(['otpverification']);
    }
    else{
      alert('you are not registered');
      //clear rec
      this.mrec.mobile_no=null;
    }
    },
  ()=>{
        
       alert('task completed');
       
       this.mrec.mobile_no=null;
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
