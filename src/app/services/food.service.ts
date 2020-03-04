import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  /*
    This service serves as a publisher for data related to food orders.  Any components which
    need this data can listen and receive it.
  */

  /*
    In this pattern, the foodSubject will allow items to be added.
    This should be private, because the FoodService should decide
    what data goes into this. We can create an observable from
    the subject, which we can then expose and consumers can
    subscribe to. This allows consumers to view the data, but
    not to control it.
  */
  private foodSubject: Subject<string> = new Subject();
  public foodObservable$ = this.foodSubject.asObservable();

  orderItems: string[] = [];

  constructor() { }

  registerOrderItem(input: string) {
    this.foodSubject.next(input);
  }
}
