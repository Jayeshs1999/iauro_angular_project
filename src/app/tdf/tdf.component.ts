import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  name=''
  constructor(private router:Router) {
   
   }

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
