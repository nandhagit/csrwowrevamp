import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service'

@Component({
  selector: 'order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent {

  order: any = [];

  constructor(private route: ActivatedRoute,
    orderService: OrderService) {
    let orderId = route.snapshot.paramMap.get('order');
    orderService.getOrderDetail(orderId).subscribe(data => {
      this.order = data;
      console.log(this.order)
    }, error => {
      console.log(error)
    })

  }

}
