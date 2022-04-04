import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { BikesComponent } from './bikes/bikes.component';

import { LoginComponent } from './cars/cars.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ObservableComponent } from './observable/observable.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SnapdataResolver } from './snapdata.resolver';
import { TdfComponent } from './tdf/tdf.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  {path:"",component: WelcomeComponent},

  // {path:"reactive-form",component: ReactiveformComponent},
  {path: 'reactive-form', component: ReactiveformComponent, resolve: {teams: SnapdataResolver}},
  {path:"td-form",component: TdfComponent},
  {path:"bikes-and-cars",component: LoginComponent,},
  {path:"bikes-and-cars",component: BikesComponent},
  {path:"file-upload",component: FileUploadComponent},
  {path:"observable-component",component: ObservableComponent},
  {path:"about",component: AboutComponent},
  {path:"customer",loadChildren:()=>import("./customer/customer.module")
  .then(mod=>mod.CustomerModule)},
  {path:"order",loadChildren:()=>import("./order/order.module")
  .then(mod=>mod.OrderModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
