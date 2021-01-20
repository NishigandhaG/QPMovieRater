import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private _movieSource = new Subject<string>();
  movieTitle$ = this._movieSource.asObservable();

  constructor() { }

  sendTitle(title:string){
    this._movieSource.next(title);
  }
}

