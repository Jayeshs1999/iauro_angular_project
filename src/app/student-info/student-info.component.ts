import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})

export class StudentInfoComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','states','update','delete'];
  

  states = [
    {name: 'Maharashtra'},
    {name: 'Panjab'},
    {name: 'Delhi'},
    {name: 'Karnataka'},
    {name: 'Karnataka'},
    
  ];


   array=[];
   getValue:Array<Object>=[]
   localStorageData:Array<Object>=[]
   buttonDecision=false
   indexValue;
   tableHeading=true

  

  submitForm: FormGroup;
  // colorControl = new FormControl('primary');
  // fontSizeControl = new FormControl(16, Validators.min(10));
  
  constructor(fb: FormBuilder) {
    
    this.submitForm = fb.group({
      firstname:['', Validators.required],
      lastname:['',Validators.required],
      mobile:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['',[Validators.required,Validators.email]],
      gender:['male',Validators.required],
      // city:['',Validators.required],
      state:['',Validators.required]
    });
  }
  getErrorMessageForEmail(){
    if(this.submitForm.get('email').hasError('email')){
      return "Not a valid email ";
    }
    return this.submitForm.get('email').hasError('required')?'You must enter a value':'';
  }

  getErrorMessageForFirstName(){
    if(this.submitForm.get('firstname').hasError('required')){
      return 'You must enter firstname';
    }else{
      return '';
    }
  }
  getErrorMessageForLastname(){
    if(this.submitForm.get('lastname').hasError('required')){
      return 'You must enter lastname';
    }else{
      return '';
    }
  }
  getErrorMessageForGender(){
    if(this.submitForm.get('gender').hasError('required')){
      return 'You must provide gender';
    }else{
      return '';
    }
  }
  getErrorMessageForState(){
    if(this.submitForm.get('state').hasError('required')){
      return 'You must provide State';
    }else{
      return '';
    }
  }
  getErrorMessageForMobileNo(){
    if(this.submitForm.get('mobile').hasError('required')){
      return 'You must provide mobile number';
    }
    else if(this.submitForm.get('mobile').hasError('pattern')){
      return 'Please provide 10 digit mobile number'
    }
    else{
      return "";
    }
  }

  submitButton(submitForm:FormGroup){
    this.tableHeading=true
  
    console.log(this.submitForm.value)
    localStorage.setItem('token',JSON.stringify(this.submitForm.value))

    console.log(this.getValue.push(JSON.parse(localStorage.getItem('token'))))
    localStorage.setItem('stud_info',JSON.stringify(this.getValue));
    this.localStorageData= JSON.parse(localStorage.getItem(('stud_info')))
    console.log("local Storage data :",this.localStorageData)
    console.log(this.getValue)
    console.log(this.localStorageData[0])
    // submitForm.reset()
  }
  ngOnInit(): void {
    this.localStorageData= JSON.parse(localStorage.getItem(('stud_info')))
    
      // this.getValue
  }

  // deleteValue(indexOfElement){
   
  //   console.log(indexOfElement)
  //   this.localStorageData.splice(indexOfElement,1)
  //   // this.getValue.splice(indexOfElement,1)
  //   // console.log(this.getValue)
  //   if(this.localStorageData.length==0){
  //       this.tableHeading=false
  //   } 
  // }

  deleteValue(indexOfElement){
   
      console.log(indexOfElement)
      // this.getValue.splice(indexOfElement,1)
      // console.log(this.getValue)
      // if(this.localStorageData.length==0){
      //     this.tableHeading=false
      // } 
       this.localStorageData= this.localStorageData.filter((value)=> value[indexOfElement]!==this.localStorageData[indexOfElement])
       console.log(this.localStorageData)
     this.localStorageData.splice(indexOfElement,1)
    console.log(this.localStorageData)
    }

  editInfo(indexOfElement){
    this.indexValue=indexOfElement
    console.log(this.indexValue)
    this.buttonDecision=true
    console.log(indexOfElement)
    this.submitForm.setValue(this.localStorageData[indexOfElement])

  }

  updateInfo(submitForm:FormGroup){
    let a=new Array();
    let value= this.submitForm.value
    console.log("form value :",value)
    console.log(this.indexValue)
    this.localStorageData.splice(this.indexValue,1,value)
    this.localStorageData= this.localStorageData.filter((value)=>{
      return value
    })
    // this.localStorageData[this.indexValue]= value
    

console.log("local storage value :",this.localStorageData)
  // console.log("vfvvv",this.localStorageData)
  // console.log("temp:",temp)


 
  //   console.log(submitForm)
  //   console.log(this.indexValue)
  //   this.tableHeading=true
  //   let value= this.submitForm.value
  //  console.log("Value :", value)
  //  this.localStorageData.splice(this.indexValue,1,value)
  //   console.log("Hiiiiii :",this.localStorageData)
    
   
   
   
    // submitForm.reset()
  }

  backToSubmit(){
    this.tableHeading=true
    this.buttonDecision=false
  }
}
