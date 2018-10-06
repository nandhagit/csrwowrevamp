import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product;
  id:string;

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).pipe(take(1)).subscribe(data => {
        this.product = data;
      })
    }
  }

  ngOnInit() {
  }

}
