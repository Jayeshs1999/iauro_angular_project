import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentInfoComponent } from '../student-info/student-info.component';

export interface UsersData {
  name: string;
  id: number;
}
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  action:string;
  local_data:any;

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    // console.log("inside popup :",student_info.indexValue)
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;

   }

  ngOnInit(): void {
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
    console.log("Dialog ref :",this.dialogRef)
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
