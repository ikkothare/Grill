// import { HttpInterceptorFn } from '@angular/common/http';

// export const loadingInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, finalize, Observable } from "rxjs";
import { LoadingService } from "../services/loading.service";

@Injectable({
  providedIn: 'root'
})

export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();

    return next.handle(req).pipe(
      finalize(() => this.loadingService.hide())
    );
  } 

}