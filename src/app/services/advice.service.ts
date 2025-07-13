import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }

  getAdvice(): Observable<string> {
    return this.http.get<any>('https://api.adviceslip.com/advice').pipe(
      map(result => result.slip.advice)
    );
  }
}
