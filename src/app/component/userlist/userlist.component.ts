import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/interfaces/signup';
import { SignupService } from '../../service/signup.service';
import { Signup1 } from 'src/app/interfaces/signup1';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  prods:Signup1[];
  constructor(private signup:SignupService) 
  { 
    this.signup.get().subscribe(
      (res:any)=>{
        this.prods=res.data;
      }
    );
  }

  ngOnInit(): void {
  }

}
