import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class LoginComponent implements OnInit {

  carsEventData='';

  constructor(private eventService:EventService) { }
  data=""

  ngOnInit(): void {
    this.eventService.on<string>().subscribe(
      eventdata=>this.carsEventData=eventdata
    )
  }

updateData(item){
  this.data=item;

}


}
