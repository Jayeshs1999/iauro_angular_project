import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminGuard } from './admin.guard';

import { BikesComponent } from './bikes/bikes.component';

import { LoginComponent } from './cars/cars.component';
import { CustomerloadGuard } from './customerload.guard';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ObservableComponent } from './observable/observable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SnapdataResolver } from './snapdata.resolver';
import { StudentInfoComponent } from './student-info/student-info.component';
import { SuperAdminGuard } from './super-admin.guard';
import { TdfComponent } from './tdf/tdf.component';
import { UnsavedGuard } from './unsaved.guard';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [

  {path:"",component: WelcomeComponent,canDeactivate:[UnsavedGuard]},

  // {path:"reactive-form",component: ReactiveformComponent},
  {
    path: 'reactive-form', resolve: {teams: SnapdataResolver},
    canActivate:[SuperAdminGuard],
    children:[
      {path:"", component: ReactiveformComponent},
      {
        path:"",canActivateChild:[AdminAccessGuard],
        children:[
          {path:"td-form",component: TdfComponent},
          {path:"bikes-and-cars",component: LoginComponent,},
          {path:"bikes-and-cars",component: BikesComponent},
        ]
    }
    ]
  },
  {path:"student-info",component: StudentInfoComponent},
  {path:"td-form",component: TdfComponent},
  {path:"bikes-and-cars",component: LoginComponent,},
  {path:"bikes-and-cars",component: BikesComponent},
  {path:"file-upload",component: FileUploadComponent},
  {path:"observable-component",component: ObservableComponent},
  {path:"about",component: AboutComponent, canActivate:[AdminGuard]},

  {path:"customer",canLoad:[CustomerloadGuard], loadChildren:()=>import("./customer/customer.module")
  .then(mod=>mod.CustomerModule)},

  {path:"order",loadChildren:()=>import("./order/order.module")
  .then(mod=>mod.OrderModule)},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
