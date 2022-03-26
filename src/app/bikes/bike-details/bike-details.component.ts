import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  constructor() { }

  @Input() bike_name:string;
  @Input() bike_color:string;
  @Input() bike_price;
  
  ngOnInit(): void {
  }

}
