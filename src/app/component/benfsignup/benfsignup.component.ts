import { Component, OnInit } from '@angular/core';
import { Benfsignup } from 'src/app/interfaces/benfsignup';
import { BenfsignupService } from 'src/app/service/benfsignup.service';
import { Country } from 'src/app/interfaces/country';
import { State } from 'src/app/interfaces/state';
import { District } from 'src/app/interfaces/district';
import { Area } from 'src/app/interfaces/area';
import { CountryService } from 'src/app/service/country.service';
import { StateService } from 'src/app/service/state.service';
import {DistrictService} from '../../service/district.service';
import { AreaService } from 'src/app/service/area.service';
import { Gender } from 'src/app/interfaces/gender';
import { Bloodtype } from 'src/app/interfaces/bloodtype';
import { Bloodgroup } from 'src/app/interfaces/bloodgroup';
import { Accbloodgroup } from 'src/app/interfaces/accbloodgroup';
import { GenderService } from 'src/app/service/gender.service';
import { BloodtypeService } from 'src/app/service/bloodtype.service';
import { BloodgroupService } from 'src/app/service/bloodgroup.service';
import { AccbloodgroupService } from 'src/app/service/accbloodgroup.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AutocallService } from 'src/app/service/autocall.service';
@Component({
  selector: 'app-root',
  templateUrl: './benfsignup.component.html',
  styleUrls: ['./benfsignup.component.css']
})
export class BenfsignupComponent implements OnInit {

  

  prods:Country[];
  srods:State[];
  drods:District[];
  arods:Area[];
  grods:Gender[];
  trods:Bloodtype[];
  brods:Bloodgroup[];
  abrods:Accbloodgroup[];
  private _categoryList = new BehaviorSubject<any>([]);
  categoryList$ = this._categoryList.asObservable();
  statebool: boolean=false;
  prods1:Benfsignup[];
  rec:Benfsignup=new Benfsignup();


  constructor(private autocall:AutocallService,private benf:BenfsignupService,private router:Router,private gender:GenderService,private bloodtype:BloodtypeService,private bloodgroup:BloodgroupService,private accbloodgroup:AccbloodgroupService,private country:CountryService,private state:StateService,private district:DistrictService,private area:AreaService,private benfserive:BenfsignupService) 
  { }
save(rec)
{
this.benf.post(rec).subscribe((res:any)=>{
  alert(res.status);
  if(res.status=='success')
  {
    // this.prods1.push(rec);
    this.router.navigate(['mobilevalidation']);
    this.autocall.get().subscribe(()=>{alert('Done..')});
  }
  else
  {
    alert('error');
  }
  },


()=>{
  alert('task completed');
  
//clear rec
// this.rec.benf_fullname="";
// this.rec.benf_age=null;
// this.rec.benf_gender=null;
// this.rec.benf_blood_type=null;
// this.rec.benf_bloodgroup=null;
// this.rec.benf_units_required=null;
// this.rec.benf_acc_bloodgroup=null;
// this.rec.benf_deadline="";
// this.rec.benf_mobile1=null;
// this.rec.benf_mobile2=null;
// this.rec.benf_hospital_name="";
// this.rec.benf_hospital_address="";
// this.rec.benf_country=null;
// this.rec.benf_state=null;
// this.rec.benf_district=null;
// this.rec.benf_area=null;
// this.rec.benf_pincode=null;
});
}
ngOnInit(): void {
      
  let adminid = localStorage.getItem('adminID');
  this.getaddress();
  this.getgender();
  this.getbloodtype();
  this.getbloodgroup();
  this.getaccbloodgroup();
}
getgender()
{
  this.gender.get().subscribe((data1:any)=>{
    this.grods=data1.data;
    console.log(data1.data[0].gender_name);
    this._categoryList.next(data1);
    });
}
getbloodtype()
{
  this.bloodtype.get().subscribe((data1:any)=>{
    this.trods=data1.data;
    console.log(data1.data[0].blood_type_name);
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
getaccbloodgroup()
{
  this.accbloodgroup.get().subscribe((data1:any)=>{
    this.abrods=data1.data;
    console.log(data1.data[0].benf_accepted_bloodgroup);
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
// nameValidate(data){
//   data.target.value
//   data
//   this.error={iserror:true,
//   message:""}
// }

}

