import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent {

  public orderid: string;

  constructor(private route: ActivatedRoute) { 
    this.orderid = this.route.snapshot.paramMap.get('orderid');
  }

}
