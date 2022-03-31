import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  // shortLink:string=''
  // loading:boolean=false;
  // file=File;
  // progress=0;
  // msg=''

  selectedFiles: FileList;
  currentFile:File;
  progress=0;
  message="";
  fileInfos:Observable<any>;

  constructor(private fileUploadService:FileUploadService ) {
    console.log(this.selectedFiles)
   }
  
  
  
  selectFile(event:any):void{
    this.selectedFiles=event.target.files;
    // console.log(this.selectedFiles)
    console.log(this.selectedFiles.item(0))
    
  }


  upload():void{
    this.progress=0;
    if(this.selectedFiles){
      const file:File |null=this.selectedFiles.item(0);
      if(file){
        this.currentFile=file;
        this.fileUploadService.upload(this.currentFile).subscribe(
          (event:any)=>{
            if(event.type===HttpEventType.UploadProgress){
              this.progress=Math.round(100*event.loaded/event.total)
              console.log(event)
            }
            
            else if(event instanceof HttpResponse){
              console.log(event)
              this.message=event.body.message;
              console.log(this.message)
              this.fileInfos=this.fileUploadService.getFiles();
              console.log(this.fileInfos)
            }
          },
          (err:any)=>{
            console.log(err);
            this.progress=0;
            if(err.error && err.error.message){
              this.message=err.error.message;
            }else{
              this.message="Could not upload the file"

            }
             this.currentFile=undefined;
          }
        );
      }
       this.selectedFiles=undefined
    }
  }

  ngOnInit(): void {
    this.fileInfos = this.fileUploadService.getFiles();
  }

}