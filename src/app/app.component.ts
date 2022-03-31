import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from './api.service';


const PRODUCTS_URL = "http://localhost:3000/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  

  title = 'File Uploaded Part';
  isDisabled: boolean=false
  initial_value: String=""
  OnClick(){
    console.log("Button clicked")
  }

  hasError=true
  style_binding1_color="orange"
  public ng_style_binding={
    color:"yellow",
    fontStyle:"italic"
  }
  update_color(){
    this.style_binding1_color="blue"
    this.hasError=!this.hasError
  }

  getName(name: string | number){      //(name:any)
    alert(name)
  }
  city_names=["Jalgaon","Pune","Mumbai","Aurangabad","Nashik"]

//api service call...............................
  data=<any>[]
  constructor(private api:ApiService,private httpClient:HttpClient){
    this.api.getData().subscribe(data=>{
      // console.warn(data);
      this.data=data
    })
  }

  ngOnInit(){
    this.httpClient.get(PRODUCTS_URL).subscribe((data)=>{
      console.log(data);
    })
  }
}