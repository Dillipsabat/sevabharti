import { Component, OnInit } from '@angular/core';
import {Signup} from '../../interfaces/signup';
import {SignupService} from '../../service/signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  arods:Signup[];
  rec:Signup=new Signup();
  rec1:Signup=new Signup();
  constructor(private signupservice:SignupService,private router:Router) 
  { }

  ngOnInit(): void {
  }

}
