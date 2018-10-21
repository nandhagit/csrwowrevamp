import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, min } from 'rxjs/operators';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category;
  categoryId;
  cart: any;
  minPrice: number;
  maxPrice: number;
  subType;
  shoppingCart;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService) {

    this.productService.getProducts().pipe(switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    })).subscribe(params => {
      this.category = params.get('category') ? params.get('category') : this.category;
      this.categoryId = params.get('id') ? params.get('id') : this.categoryId;
      this.subType = params.get('subtype');
      let minPrice = params.get('min');
      let maxPrice = params.get('max');
      this.filteredProducts = (this.category) ? this.products.filter(p => {
        return p.category === this.category
      }) : this.products;
      this.filterSubType(this.subType);
      this.filterPrice(+minPrice, +maxPrice);

    });

    this.productService.minMaxPrice().subscribe(result => {
      this.minPrice = result[0];
      this.maxPrice = result[1];
    })
  }

  filterSubType(subType: string) {
    this.filteredProducts = (this.subType) ? this.filteredProducts.filter(p =>
      p.subType === this.subType) : this.filteredProducts;

  }

  filterPrice(minPrice: number, maxPrice: number) {
    this.filteredProducts = (minPrice && maxPrice) ? this.filteredProducts.filter(p =>
      (p.price > +minPrice) && (p.price < +maxPrice)) : this.filteredProducts
  }

  async ngOnInit() {
    let cart$ = await this.cartService.getCart();
    cart$.subscribe(result => {
      let cart = result;
      this.shoppingCart = cart.cartItems;
      console.log(this.shoppingCart)
    });
  }

}
