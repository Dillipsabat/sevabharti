import { Component, OnInit } from '@angular/core';
import { Admin } from '../../interfaces/admin';
import { AdminserviceService } from '../../service/adminservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  myForm: FormGroup;
  rec: Admin = new Admin();
  arods: Admin[];
  constructor(private _adminservice: AdminserviceService, private _router: Router,) {
    
  }
   
  // adminlogin() {
  //   this.myForm = this.formbuild.group({
  //      name: ['', Validators.required ]
  //   });
  // }

  login(rec) {
    this._adminservice.getbyid(rec.admin_username, rec.admin_password).subscribe(
      (res: any) => {
        if (res[0].admin_username == this.rec.admin_username && res[0].admin_password == this.rec.admin_password) {
          alert('You are the admin login successfully')
          this._router.navigate(['adminpanel']);
        }
        else {
          alert('You are not registered');
        }
      }
    );
  }
  change() {
    this._router.navigate(['home']);
  }

  ngOnInit(): void {
  }



}
