import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  orderItems: string[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {

    this.foodService
      .foodObservable$.subscribe(item => {
        // This callback function will be called
        // everytime a new item is provided to the subject
        this.orderItems.push(item);
      });
  }

}
