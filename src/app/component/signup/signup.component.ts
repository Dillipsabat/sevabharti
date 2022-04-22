import { Component, OnInit } from '@angular/core';
import {Signup} from '../../interfaces/signup';
import {SignupService} from '../../service/signup.service';
import {Router} from '@angular/router';
import { Country } from 'src/app/interfaces/country';
import { State } from 'src/app/interfaces/state';
import { District } from 'src/app/interfaces/district';
import { Area } from 'src/app/interfaces/area';
import { CountryService } from 'src/app/service/country.service';
import { StateService } from 'src/app/service/state.service';
import {DistrictService} from '../../service/district.service';
import { AreaService } from 'src/app/service/area.service';
import { Userstatus } from '../../interfaces/userstatus';
import { UserstatusService } from 'src/app/service/userstatus.service';

import { Gender } from 'src/app/interfaces/gender';
import { Bloodgroup } from 'src/app/interfaces/bloodgroup';
import { GenderService } from 'src/app/service/gender.service';
import { BloodgroupService } from 'src/app/service/bloodgroup.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  prods:Country[];
  srods:State[];
  drods:District[];
  arods:Area[];
  grods:Gender[];
  brods:Bloodgroup[];
  urods:Userstatus[];
  private _categoryList = new BehaviorSubject<any>([]);
  categoryList$ = this._categoryList.asObservable();
  statebool: boolean=false;
  prods1:Signup[];
  newrec:Signup=new Signup();
  constructor(private user:UserstatusService,private signupservice:SignupService,private router:Router,private gender:GenderService,private bloodgroup:BloodgroupService,private country:CountryService,private state:StateService,private district:DistrictService,private area:AreaService) 
  { }
add(newrec)
{
  this.signupservice.postdetails(newrec).subscribe(
    (res:string)=>{
      if(res=="success")
      {
        this.prods1.push(newrec);
        this.router.navigate(['mobilevalidation']);
      }
      else{
        console.log('error');
      }
    },
    ()=>{
      alert('signup successfully');
      this.router.navigate(['mobilevalidation']);
    //clear records
this.newrec.user_fullname="";
this.newrec.user_age=null;
this.newrec.user_gender=null;
this.newrec.user_bloodgroup=null;
this.newrec.user_mobile1=null;
this.newrec.user_mobile2=null;
this.newrec.user_emailid="";
this.newrec.user_fulladdress="";
this.newrec.user_country=null;
this.newrec.user_state=null;
this.newrec.user_district=null;
this.newrec.user_area=null;
this.newrec.user_pincode=null;
  }
  );
}
// change1()
// {
//   this.router.navigate(['userlogin']);
// }
ngOnInit(): void {
      
  let adminid = localStorage.getItem('adminID');
  this.getaddress();
  this.getgender();
  this.getbloodgroup();
  this.getuserstatus();
}
getuserstatus()
{
  this.user.get().subscribe((data1:any)=>{
    this.urods=data1.data;
    console.log(data1.data[0].gender_name);
    this._categoryList.next(data1);
    });
}
getgender()
{
  this.gender.get().subscribe((data1:any)=>{
    this.grods=data1.data;
    console.log(data1.data[0].gender_name);
    this._categoryList.next(data1);
    });
}
getbloodgroup()
{
  this.bloodgroup.get().subscribe((data1:any)=>{
    this.brods=data1.data;
    console.log(data1.data[0].bloodgroup_name);
    this._categoryList.next(data1);
    });
}
getaddress(){
  this.country.get().subscribe((data1:any)=> {
    this.prods=data1.data;
    console.log(data1.data[0].country_name);
    this._categoryList.next(data1);
    this.getstate(data1.data[0].country_id)
 })
}
getstate(data){
  // console.log(data.target.value);
  this.state.get(data).subscribe((data1:any)=> {
    this.srods=data1.data;
    this.statebool=true;
    console.log(data1.data[0].state_name);
    
    this._categoryList.next(data1);
    this.getdistrict(data1.data[0].state_id)
 })
}
getdistrict(data){
  // console.log(data.target.value);
  this.district.get(data).subscribe((data1:any)=> {
    this.drods=data1.data;
    this.statebool=true;
    console.log(data1.data[0].district_name);
    this._categoryList.next(data1);
    this.getarea(data1.data[0].district_id)
 })
}
getarea(data){
  this.area.get(data).subscribe((data1:any)=> {
    this.arods=data1.data;
    this.statebool=true;
    console.log(data1.data[0].area_name);
    this._categoryList.next(data1);
 })
}

keyPress(event: any) {
  const pattern = /[0-9\+\-\ ]/;
  let inputChar = String.fromCharCode(event.charCode);


  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}
}
