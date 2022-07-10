import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  maxBs = new BehaviorSubject<number>(100000000);
  maxi = this.maxBs.asObservable()
  minBs = new BehaviorSubject<number>(500000);
  mixi = this.minBs.asObservable()
  constructor() { }
  updatedDataMax(data: number) {
    this.maxBs.next(data);
  }
  updatedDataMin(data: number) {
    this.minBs.next(data);
  }

}
