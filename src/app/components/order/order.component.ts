import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderInput = '';

  /**
   * Injecting a dependency
   * To inject a service, we must declare it as
   * a parameter to the constructor. This declaration
   * must be PRIVATE.
   * (private, public, and protected are typescript
   *    language features))
   */
  constructor(private foodService: FoodService) { }

  ngOnInit() {
  }

  submitOrder(e: KeyboardEvent) {
    this.foodService
      .registerOrderItem(this.orderInput);
    this.orderInput = '';
  }
}
