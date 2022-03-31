import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { LoginComponent } from './cars/cars.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ObservableComponent } from './observable/observable.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TdfComponent } from './tdf/tdf.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  {path:"",component: WelcomeComponent},
  {path:"reactive-form",component: ReactiveformComponent},
  {path:"td-form",component: TdfComponent},
  {path:"bikes-and-cars",component: LoginComponent,},
  {path:"bikes-and-cars",component: BikesComponent},
  {path:"file-upload",component: FileUploadComponent},
  {path:"observable-component",component: ObservableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
