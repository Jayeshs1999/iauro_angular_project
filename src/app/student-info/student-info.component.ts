import { variable } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


export interface PeriodicElement {
  lastname: string;
  firstname: number;
  mobile: number;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {firstname: 1, lastname: 'Hydrogen', mobile: 10079, state: 'H'},
  {firstname: 2, lastname: 'Hydrogen', mobile: 10079, state: 'H'},
  {firstname: 3, lastname: 'Hydrogen', mobile: 10079, state: 'H'},
  {firstname: 4, lastname: 'Hydrogen', mobile: 10079, state: 'H'},
  {firstname: 5, lastname: 'Hydrogen', mobile: 10079, state: 'H'},
  {firstname: 6, lastname: 'Hydrogen', mobile: 10079, state: 'H'},
  {firstname: 7, lastname: 'Hydrogen', mobile: 10079, state: 'H'},
  {firstname: 8, lastname: 'Hydrogen', mobile: 10079, state: 'H'},
 
  
];


@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})

export class StudentInfoComponent implements AfterViewInit {
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
   localStorageData:Array<Object>=[{firstname:"Jayesh",lastname:"Sevat",mobile:8888585093,state:"Maharashtra"},
   {firstname:"Jayesh",lastname:"Sevat",mobile:8888585093,gender:"male",state:"Maharashtra"},
   {firstname:"Jash",lastname:"Sevatkar",mobile:8888586793,gender:"female",state:"Maharashtra"},
   {firstname:"shubham",lastname:"Sevat",mobile:9888585093,gender:"male",state:"Mahacashtra"},
   {firstname:"Jayesh",lastname:"Sevat",mobile:8888585093,gender:"male",state:"Maharashtra"},
   {firstname:"Jash",lastname:"Sevakar",mobile:8888586793,gender:"female",state:"Maharashtra"},
   {firstname:"shubham",lastname:"Sevat",mobile:9888585093,gender:"male",state:"Mahacashtra"},]
  
   
   buttonDecision=false
   indexValue;
   tableHeading=true

  

  submitForm: FormGroup;
  // colorControl = new FormControl('primary');
  // fontSizeControl = new FormControl(16, Validators.min(10));
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(fb: FormBuilder,public  dialog:MatDialog) {
    
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

  dataSource=new MatTableDataSource(this.localStorageData);//fgfgfbbfbf

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log("paginator : ",this.dataSource.paginator)
    console.log("Data source :",this.dataSource)
  }

  ngOnInit(): void {
    this.localStorageData= JSON.parse(localStorage.getItem(('stud_info')))
    this.dataSource=new MatTableDataSource(this.localStorageData);
    
      // this.getValue
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
    this.dataSource=new MatTableDataSource(this.localStorageData);
    this.dataSource._updateChangeSubscription()
    this.dataSource._renderChangesSubscription
    this.dataSource.paginator = this.paginator;
    submitForm.reset()
  }
  

  openDialog(action,obj,indexOfElement){
     obj.action = action;
     console.log("action:",obj.action)
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data:obj
    });
    console.log("dialogRef :",dialogRef)
    dialogRef.afterClosed().subscribe(result => {
      console.log("result.event :",result.event)
      console.log("result.event :",result)
     if(result.event == 'Delete'){
     
        this.deleteRowData(result.data,indexOfElement);  
      }
    });
  }

  deleteRowData(row_obj,indexOfElement){
    this.localStorageData= this.localStorageData.filter((value)=> value[indexOfElement]!==this.localStorageData[indexOfElement])
         console.log(this.localStorageData)
       this.localStorageData.splice(indexOfElement,1)
      console.log(this.localStorageData)
      this.dataSource=new MatTableDataSource(this.localStorageData);
      this.dataSource._updateChangeSubscription()
     
   
  }

  // deleteValue(indexOfElement){
   

  //     console.log(indexOfElement)
  //     // this.getValue.splice(indexOfElement,1)
  //     // console.log(this.getValue)
  //     // if(this.localStorageData.length==0){
  //     //     this.tableHeading=false
  //     // } 
  //      this.localStorageData= this.localStorageData.filter((value)=> value[indexOfElement]!==this.localStorageData[indexOfElement])
  //      console.log(this.localStorageData)
  //    this.localStorageData.splice(indexOfElement,1)
  //   console.log(this.localStorageData)
  //   this.dataSource=new MatTableDataSource(this.localStorageData);
  //   this.dataSource._updateChangeSubscription()
  //   }

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

    this.dataSource=new MatTableDataSource(this.localStorageData);
    this.dataSource._updateChangeSubscription()
    
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
     submitForm.reset()
  }

  backToSubmit(){
    this.tableHeading=true
    this.buttonDecision=false
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log("Filter value :",filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter)

  }
}
