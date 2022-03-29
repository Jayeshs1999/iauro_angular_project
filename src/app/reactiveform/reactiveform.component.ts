import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { checkLowerCaseLetterInPassword, checkMinLengthForPassword, checkNumericInPassword, checkSpecialCharacterInPassword, checkUpperCaseLetterInPassword, EventService } from '../event.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  isButtonClick = false
  emailAddress: FormControl

  // checkoutForm:FormGroup;
  // constructor(private formBuilder:FormBuilder) {
  //   this.checkoutForm=formBuilder.group({
  //   emailAddress: new FormControl(),
  //   quantity:new FormControl(),
  //   terms:new FormControl(),
  //  })}

  checkoutForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private customValidator: EventService) {
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
    //  this.checkoutForm.get("password").valueChanges.subscribe(x => {
    //   console.log('password value changed')
    //   console.log(x)
    //  })

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
  }

  ngOnInit(): void {
  }

}
