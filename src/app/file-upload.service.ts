import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
   url="https://file.io";
   constructor(private http:HttpClient) {}
   
  upload(file): Observable<any>{    //return an observable
    const formData=new FormData();
    formData.append("file",file,file.name);
    console.log(formData)
    return this.http.post(this.url,formData ,
     
    ) 
  }

 

  
}


