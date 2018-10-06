import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WowNavbarComponent } from './wow-navbar/wow-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { CustomFormsModule } from 'ng2-validation';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { CheckoutComponent } from './payment/checkout/checkout.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RatingComponent } from './rating/rating.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    WowNavbarComponent,
    ProductsComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    HomeComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    CheckoutComponent,
    ShoppingCartSummaryComponent,
    ProductDetailsComponent,
    RatingComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([{
      path: 'home',
      component: HomeComponent
    }, {
      path: 'myorders',
      component: MyOrdersComponent
    },
    {
      path: 'mycart',
      component: ShoppingCartComponent
    }, {
      path:'login',
      component: LoginComponent
    },{
      path: 'admin/orders',
      component: AdminOrdersComponent
    }, {
      path: 'admin/product/new',
      component: ProductFormComponent
    }, {
      path: 'admin/products/:id',
      component: ProductFormComponent
    }, {
      path: 'admin/products',
      component: AdminProductsComponent
    },{
      path: 'products',
      component: ProductsComponent
    },{
      path: 'checkout',
      component: CheckoutComponent
    },{
      path: 'details/:id',
      component: ProductDetailsComponent
    }])
  ],
  providers: [CategoryService, ProductService, ShoppingCartService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
