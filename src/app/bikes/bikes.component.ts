import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor() { }
  bike_name:string;
  bike_color:string;
  bike_price;


  ngOnInit(): void {
    this.bike_name="FZs";
    this.bike_color="Light Blue";
    this.bike_price=125000;
  }

}
