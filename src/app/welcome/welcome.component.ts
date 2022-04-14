import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  isDirty=true
  currentState='small'
  dates=[new Date().getTime()];
  animateMe(){
    this.currentState=(this.currentState==="small" ?"large":"small")
    this.dates.push(new Date().getTime())
  }

  constructor() { }

  ngOnInit(): void {
  }

}
