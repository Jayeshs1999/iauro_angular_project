import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  data=""

  ngOnInit(): void {
    
  }

updateData(item){
  this.data=item;

}


}
