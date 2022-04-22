import { Component, OnInit } from '@angular/core';
import {Benfsignup1} from '../../interfaces/benfsignup1';
import {BenfsignupService} from '../../service/benfsignup.service';

@Component({
  selector: 'app-benfrequestlist',
  templateUrl: './benfrequestlist.component.html',
  styleUrls: ['./benfrequestlist.component.css']
})
export class BenfrequestlistComponent implements OnInit {

  prods1:Benfsignup1[];
  constructor(private benf:BenfsignupService) 
  { 
    this.benf.get().subscribe(
      (res:any)=>{
this.prods1=res.data;
      }
    );
  }

  ngOnInit(): void {
  }

}
