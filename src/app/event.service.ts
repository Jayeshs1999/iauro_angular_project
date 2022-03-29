import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
  public subject=new BehaviorSubject<any>('');

  emit<T>(data:T){
    this.subject.next(data);
  }

  on<T>(): Observable<T>{
    return this.subject.asObservable();
  }
  

}


export function checkUpperCaseLetterInPassword(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      if (!value)
          return null;

      const hasUpperCase = /[A-Z]+/.test(value);

      const passwordValid = hasUpperCase;

      return !passwordValid ? {
        upperCaseLetter: {
          hasUpperCase: true,
        }
    }: null;

  }
  
}
export function checkLowerCaseLetterInPassword(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      if (!value)
          return null;

      const hasLowerCase = /[a-z]+/.test(value);
      const passwordValid = hasLowerCase;

      return !passwordValid ? {
        lowerCaseLetter: {
          hasLowerCase: true,
        }
    }: null;

  }
}
export function checkNumericInPassword(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      if (!value)
          return null;
          const hasNumeric = /[0-9]+/.test(value);
      const passwordValid = hasNumeric;

      return !passwordValid ? {
        numericLetter: {
          hasNumeric: true,
        }
    }: null;
  }
}
export function checkSpecialCharacterInPassword(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      if (!value)
          return null;
          
          const hasSpecialChar = /[!@#$]+/.test(value);
        
      const passwordValid = hasSpecialChar;
      return !passwordValid ? {
        specialLetter: {
          hasSpecialCharacter: true,
        }
    }: null;
  }
}

export function checkMinLengthForPassword(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      if (!value)
          return null;

          const hasSpecialChar=value.length>=8 && value.length<=10;
          console.log(hasSpecialChar)
      const passwordValid = hasSpecialChar;
      
      return !passwordValid ? {
        minLength: {
          hasMinLength: true,
        }
    }: null;
  }
}