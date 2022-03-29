import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginUser(signInFrom:NgForm){
    console.log(signInFrom)
    console.log(signInFrom.value.emailAddressField)
  }

  getValues(val){
    console.log(val)

  }

}
