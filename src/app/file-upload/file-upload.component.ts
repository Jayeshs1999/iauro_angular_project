import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  shortLink:string=''
  loading:boolean=false;
  file=File;
  progress=0;
  msg=''

  constructor(private fileUploadService:FileUploadService ) { }
  
  onChange(event){
    console.log(event)
    console.log(event.target)
     this.file=event.target.files[0]
     console.log(this.file)
  }

  onUpload(){
    
    this.loading=!this.loading;
    this.fileUploadService.upload(this.file).subscribe(
      (event:any)=>{
         console.log("event linke",event)
        if(typeof(event)==='object'){
          this.shortLink=event.link;
           console.log(event.link)
          this.loading=false
        }
      }
    )
    
  }

  ngOnInit(): void {
  }

}