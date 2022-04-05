import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<WelcomeComponent> {
  canDeactivate(
    component: WelcomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(component.isDirty){
        return window.confirm("You have some unsaved changes. Sure you want to leave?")
      }
      return true
  }
  
}
