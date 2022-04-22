import { Component, OnInit } from '@angular/core';
import {Feedback} from '../../interfaces/feedback';
import {InventoryService} from '../../service/inventory.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prods:Feedback[];
  newrec:Feedback=new Feedback();
    constructor(private _inventoryservice:InventoryService,private router:Router) 
    { 
      this._inventoryservice.getfeedback().subscribe(
        (res:any)=>{
          this.prods=res;
        }
      );
    }
    add(newrec:Feedback)
    {
  this._inventoryservice.addfeedback(newrec).subscribe(
    (res:string)=>{
  if(res=="success")
  {
  this.prods.push(newrec);
  }
  else
  {
    alert('error');
  }
    },
    ()=>{
      alert('feedback sent successfully');
      //clear records
      newrec.feedback_name="";
      newrec.feedback_emaill="";
      newrec.feedback_message="";
    }
  );
    }
    donate()
    {
      this.router.navigate(['uservalidation']);
    }
    receive()
    {
      this.router.navigate(['uservalidation1']);
    }

  ngOnInit(): void {
  }

  // setLang(lang: string) {
  //   this.translate.use(lang)
  //   .then(() => {})
  // }
}
