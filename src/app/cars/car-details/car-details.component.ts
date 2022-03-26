import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor() { }

  @Output()
  updateDataEvent=new EventEmitter()

  ngOnInit(): void {
  }

}
