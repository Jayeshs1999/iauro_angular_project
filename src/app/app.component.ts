import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'first-angular-project';
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
}
