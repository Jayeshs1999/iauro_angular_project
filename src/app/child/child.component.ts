import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked ,OnDestroy,AfterViewInit,AfterViewChecked{

  @Input() data:string;
  tickerNumber:number=0

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.tickerNumber++;
    console.log("inside the ngOnChange  :",this.tickerNumber)
  }
  
  counter=0;
  interval

  ngOnInit(): void {
    console.log("inside the ngOnInit  :",this.tickerNumber)    
  }

  ngDoCheck(): void {
    console.log("inside the ngDoCheck  :",this.tickerNumber)
  }

  ngAfterContentInit(): void {
      console.log("inside the ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
      console.log("inside the ngAfterContentChecked")
  }

  ngOnDestroy(): void {
   
      console.log("ngOnDestroy Called")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called")
  }

  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked called")
  }

}
