import { Component, OnInit } from '@angular/core';
import {Admin} from '../../interfaces/admin';
import {AdminserviceService} from '../../service/adminservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  arods:Admin[];
  constructor(private adminservice:AdminserviceService,private router:Router) 
  {
    this.adminservice.getadmindetails().subscribe(
      (res:any)=>{this.arods=res;}
    );
   }

   change1()
  {
    this.router.navigate(['adminlogin']);
  }
  ngOnInit(): void {
  }

}
