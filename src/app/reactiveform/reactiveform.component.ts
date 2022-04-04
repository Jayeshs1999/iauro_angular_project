import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { checkLowerCaseLetterInPassword, checkMinLengthForPassword, checkNumericInPassword, checkSpecialCharacterInPassword, checkUpperCaseLetterInPassword, EventService } from '../event.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  teams= true

  isButtonClick = false
  emailAddress: FormControl


  checkoutForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private customValidator: EventService,private route:ActivatedRoute,private router:Router) {
    this.checkoutForm = formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
          checkMinLengthForPassword(),
          checkUpperCaseLetterInPassword(),
          checkLowerCaseLetterInPassword(),
          checkNumericInPassword(),
          checkSpecialCharacterInPassword(),
        ]],
      terms: ['', Validators.required],

    })
   
    this.checkoutForm.get("emailAddress").valueChanges.subscribe(x => {
      console.log('email value changed')
      console.log(x)
    })


  }
  get password() {
    return this.checkoutForm.controls['password'];
  }
  postData() {
    console.log(this.checkoutForm)
    console.log(this.checkoutForm.value)
    console.log(this.checkoutForm.value.emailAddress)
  }
  buttonClick() {
    this.isButtonClick = true
    let data=this.checkoutForm.value;
    console.log(data)
    
      this.router.navigate(['/about'],{
        queryParams:{data:btoa(JSON.stringify(data))}
      })
  }

  ngOnInit(): void {
    this.teams = this.route.snapshot.data['reactive-form'];
  }


}
