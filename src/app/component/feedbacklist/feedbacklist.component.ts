import { Component, OnInit } from '@angular/core';
import {Feedback} from '../../interfaces/feedback';
import {InventoryService} from '../../service/inventory.service';

@Component({
  selector: 'app-feedbacklist',
  templateUrl: './feedbacklist.component.html',
  styleUrls: ['./feedbacklist.component.css']
})
export class FeedbacklistComponent implements OnInit {

  
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
