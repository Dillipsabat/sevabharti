import { Component, OnInit } from '@angular/core';
import {Bloodbank} from '../../interfaces/bloodbank';
import {BloodbankService} from '../../service/bloodbank.service';

@Component({
  selector: 'app-bloodbanklist',
  templateUrl: './bloodbanklist.component.html',
  styleUrls: ['./bloodbanklist.component.css']
})
export class BloodbanklistComponent implements OnInit {

  brods:Bloodbank[];
  constructor(private bloodbankservice:BloodbankService) 
  {
    this.bloodbankservice.getbloodbank().subscribe(
(res:any)=>{this.brods=res;}
    );
   }

  ngOnInit(): void {
  }

}
