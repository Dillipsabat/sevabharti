import { Component, OnInit } from '@angular/core';
import { Bloodbank } from 'src/app/interfaces/bloodbank';
import { BloodbankService } from 'src/app/service/bloodbank.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './bloodbanks.component.html',
  styleUrls: ['./bloodbanks.component.css']
})
export class BloodbanksComponent implements OnInit {
  brods:Bloodbank[];
 rec:Bloodbank=new Bloodbank();
  constructor(private router:Router,private bloodbank:BloodbankService) { }
  login(rec)
  {
    this.bloodbank.getbyid(rec.bloodbank_username,rec.bloodbank_password).subscribe(
      (res:any)=>{
        if(res[0].bloodbank_username==this.rec.bloodbank_username&&res[0].bloodbank_password==this.rec.bloodbank_password)
        {
          this.router.navigate(['bloodbankpanel']);
        }
        else{
               alert('You are not registered');
         }
      },()=>{
       
        //clear rec
        this.rec.bloodbank_username="";
        this.rec.bloodbank_password="";
      }
    );
  }
change1()
{
 this.router.navigate(['home']);
}
  ngOnInit(): void {
  }

}
