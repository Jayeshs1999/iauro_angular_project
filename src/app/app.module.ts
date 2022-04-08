import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './cars/cars.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bikes/bike-details/bike-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { FileUploadComponent } from './file-upload/file-upload.component';
import { MockHttpCallInterceptor } from './http.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentInfoComponent } from './student-info/student-info.component';
import { MaterialModule } from './material/material.module';

console.log("App module loaded")

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarDetailsComponent,
    BikesComponent,
    BikeDetailsComponent,
    TdfComponent,
    ReactiveformComponent,
    ObservableComponent,
    FileUploadComponent,
    WelcomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    StudentInfoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModuleModule,
    HttpClientModule,
    BrowserAnimationsModule,
 
    MaterialModule,
    MaterialModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:MockHttpCallInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
