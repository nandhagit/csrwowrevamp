import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../model/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;
  loading: boolean = true;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getProducts().subscribe(data => {
      this.filteredProducts = this.products = data;
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query: string) {
    this.filteredProducts = (query) ? this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : this.products;
  }
}
