import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category;
  cart: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService) {
      
    this.productService.getProducts().pipe(switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    })).subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = (this.category) ? this.products.filter(p => 
        p.category === this.category) : this.products;
    });
    
  }

}
