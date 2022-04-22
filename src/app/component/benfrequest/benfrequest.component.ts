import { Component, OnInit } from '@angular/core';
import { Benfsignup1 } from 'src/app/interfaces/benfsignup1';
import { BenfsignupService } from '../../service/benfsignup.service';

@Component({
  selector: 'app-benfrequest',
  templateUrl: './benfrequest.component.html',
  styleUrls: ['./benfrequest.component.css']
})
export class BenfrequestComponent implements OnInit {

  prods:Benfsignup1[];
  constructor(private benf:BenfsignupService) 
  { 
    var mob1=Number(localStorage.getItem('mobile'));
    this.benf.getbyid(mob1).subscribe((res:any)=>{
      this.prods=res.data;
    });
  }

  ngOnInit(): void {
  }

}
