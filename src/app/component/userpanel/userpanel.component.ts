import { Component, OnInit } from '@angular/core';
import { Benfsignup } from 'src/app/interfaces/benfsignup';
import { BenfsignupService } from '../../service/benfsignup.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  prods:Benfsignup[];
  constructor(private benf:BenfsignupService,private router:Router) 
  { 
    var mob1=Number(localStorage.getItem('mobile'));
    this.benf.getbyid(mob1).subscribe((res:any)=>{
      this.prods=res.data;
    });
  }
  change1()
  {
    this.router.navigate(['mobilevalidation']);
  }

  ngOnInit(): void {
  }

}
