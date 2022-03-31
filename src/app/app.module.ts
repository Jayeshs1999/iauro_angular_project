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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModuleModule,
    HttpClientModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:MockHttpCallInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
