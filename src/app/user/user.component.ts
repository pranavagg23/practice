import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
name:string | undefined;
mobile:number | undefined;
email:string | undefined;
location:string | undefined;


  constructor() {
    console.log('user:constructor');
  }
  ngOnInit(): void {
    console.log('user : onInit');
    this.name = "Pranav";
    this.mobile=9041691174;
    this.email="pranavaggarwal";
    this.location="Chandigarh";

  }
}
