import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor(private eventService:EventService ) { }

  bike_name:string;
  bike_color:string;
  bike_price;


  ngOnInit(): void {
    this.bike_name="FZs";
    this.bike_color="Light Blue";
    this.bike_price=125000;
  }

  send(){
    this.eventService.emit<string>("This is the data from bikes component");
  }

}
