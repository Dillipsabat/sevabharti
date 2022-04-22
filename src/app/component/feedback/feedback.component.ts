import { Component, OnInit } from '@angular/core';
import {Feedback} from '../../interfaces/feedback';
import {InventoryService} from '../../service/inventory.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  frods:Feedback[];
  constructor(private inventoryservice:InventoryService) 
  { 
  this.inventoryservice.getfeedback().subscribe(
    (res:any)=>{
      this.frods=res;
    }
  );
  }
  ngOnInit(): void {
  }

}
