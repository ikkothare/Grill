// import { ResolveFn } from '@angular/router';

// export const adviceResolver: ResolveFn<boolean> = (route, state) => {
//   return true;
// };

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AdviceService } from "../services/advice.service";

@Injectable({
  providedIn: 'root'
})

export class AdviceResolver implements Resolve<string> {

  constructor(private adviceService: AdviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<string> {
    return this.adviceService.getAdvice();
  }
}