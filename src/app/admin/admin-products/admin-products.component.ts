import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Subscription } from "rxjs";
import { Product } from "../../model/product";

@Component({
  selector: "app-admin-products",
  templateUrl: "./admin-products.component.html",
  styleUrls: ["./admin-products.component.css"]
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getProducts().subscribe(data => {
      this.filteredProducts = this.products = data;
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query: string) {
    console.log(query);
    this.filteredProducts = (query) ? this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())) : this.products;
  }
}
