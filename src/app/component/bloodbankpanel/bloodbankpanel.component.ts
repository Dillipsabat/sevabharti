import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bloodbankpanel',
  templateUrl: './bloodbankpanel.component.html',
  styleUrls: ['./bloodbankpanel.component.css']
})
export class BloodbankpanelComponent implements OnInit {

  constructor(private _router:Router) { }
  change()
  {
    this._router.navigate(['home']);
  }

  ngOnInit(): void {
  }

}
