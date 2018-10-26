import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RatingFormComponent } from '../rating-form/rating-form.component';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any = [];
  id: string;
  cartItems: any = [];

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private cartService: ShoppingCartService) {
  }

  open() {
    const modalRef = this.modalService.open(RatingFormComponent);
    modalRef.componentInstance.productId = this.product.id;
  }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).pipe(take(1)).subscribe(data => {
        this.product = data;
      });
    }
    (await this.cartService.getCart()).subscribe(result => {
      let cart: any = result;
      this.cartItems = cart.cartItems;
    });
  }

}
