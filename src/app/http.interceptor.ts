import { Injectable } from '@angular/core';
import * as data from './data.json';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

const PRODUCTS_URL = "http://localhost:3000/products";

@Injectable()
export class MockHttpCallInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted request :'+request.url)
    if(request.url===PRODUCTS_URL){
      console.log("Loaded from JSON :"+request.url)
      return of(new HttpResponse({ status: 200, body: ((data) as any).default }))
    }
    return next.handle(request);

  }
}
