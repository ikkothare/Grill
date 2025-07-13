import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loader = new BehaviorSubject<boolean>(false);
  loading$ = this.loader.asObservable();

  constructor(private http: HttpClient) { }

  show() {
    this.loader.next(true);
  }

  hide() {
    this.loader.next(false);
  }

   getImage(): Observable<any> {
    return this.http.get('https://picsum.photos/640/480',{
      responseType: 'blob' // important for image binary data
    }).pipe(
      delay(2000) // Delay by 2 seconds
    );;
  }

}
