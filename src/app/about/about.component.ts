import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data:any;
  email
  password
 
  constructor(private router:Router,private activeRoute:ActivatedRoute ) {

    this.activeRoute.queryParams.subscribe(params=>{
      console.log(params)
      this.data=JSON.parse(atob(params['data']))
      console.log(this.data.emailAddress)
      this.email=this.data.emailAddress
      this.password=this.data.password
    });

  

   }

  ngOnInit(): void {
  }

}
