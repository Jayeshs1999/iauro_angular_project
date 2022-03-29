import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus: any;
  data:Observable<any>;
  data2:Observable<any>;
  constructor() { }

  ngOnInit(): void {

   this.data= new Observable(observer=>{
      
      setTimeout(() => {
        observer.next("In Progress")
      }, 2000);
      setTimeout(() => {
        observer.next("Progressing")
      }, 5000);
      
      setTimeout(() => {
        observer.next("Completed")
      }, 8000);

      setTimeout(() => {
        observer.complete()
      }, 8000);

      setTimeout(() => {
        observer.next("After completed")
      }, 8000);
    });


    this.data2=this.data;
    this.data2.subscribe(val2=>{
      console.log("data 2 subscription")
    })
    
    this.data.subscribe(val=>{
      this.orderStatus=val
    })


 //------------------new Observable----------------------
  const sequence=new Observable(countOneToTen);

  sequence.subscribe({
    next(num){
      console.log(num)
    }
  })

  function countOneToTen(observer) {
    for(var i=1;i<=10;i++){
      observer.next(i)
    }
  }

}
}
