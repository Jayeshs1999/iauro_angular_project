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

  value;
  getValues(simpleForm:NgForm){
    console.log(simpleForm)
    this.value=simpleForm
    console.log(this.value)

  }

  // getValues(val){
  //   console.log(val)

  // }
  
  // buttonClick(simpleForm:NgForm) {
  //   let data=simpleForm;
  //   console.log(data)
  //     this.router.navigate(['/about'],{
  //       queryParams:{data:btoa(JSON.stringify(data))}
  //     })
  // }

}
