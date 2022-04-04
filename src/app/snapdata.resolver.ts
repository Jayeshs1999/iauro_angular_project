import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SnapdataResolver implements Resolve<boolean> {

  getTeams(): Observable<any> {
    return of([true, false, true, false]).pipe(delay(2000));
  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.getTeams();
  }
  
}
