import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './cars/cars.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bikes/bike-details/bike-details.component';
import { FormsModule } from '@angular/forms';
import { AuthModuleModule } from './auth-module/auth-module.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarDetailsComponent,
    BikesComponent,
    BikeDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
