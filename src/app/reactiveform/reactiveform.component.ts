import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  isButtonClick=false
  emailAddress:FormControl

  // checkoutForm:FormGroup;
  // constructor(private formBuilder:FormBuilder) {
  //   this.checkoutForm=formBuilder.group({
  //   emailAddress: new FormControl(),
  //   quantity:new FormControl(),
  //   terms:new FormControl(),
  //  })}

  checkoutForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.checkoutForm=formBuilder.group({
    emailAddress: ['',[Validators.required, Validators.email]],
    password:['',[Validators.required,
       Validators.pattern(/[A-Z]/),
    Validators.pattern(/[a-z]/),
    Validators.pattern(/[0-9]/),
    Validators.pattern(/[!@#$]/),]],
    terms:['',Validators.required],
  
   }) 
   this.checkoutForm.get("emailAddress").valueChanges.subscribe(x => {
    console.log('email value changed')
    console.log(x)
 })
  }
   postData(){
     console.log(this.checkoutForm)
     console.log(this.checkoutForm.value)
     console.log(this.checkoutForm.value.emailAddress)
   }
   buttonClick(){
    this.isButtonClick=true
   }

  ngOnInit(): void {
  }

}
