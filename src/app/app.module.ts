import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WowNavbarComponent } from './wow-navbar/wow-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CustomFormsModule } from 'ng2-validation';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { CheckoutComponent } from './payment/checkout/checkout.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RatingComponent } from './rating/rating.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './services/auth.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AboutUsComponent } from './about-us/about-us.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Ng5SliderModule } from 'ng5-slider';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddressComponent } from './address/address.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { BlogComponent } from './blog/blog.component';
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { RatingFormComponent } from './rating-form/rating-form.component';

import { RatingService } from './services/rating.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    SignupComponent,
    BlogComponent,
    MembersComponent,
    DashboardComponent,
    AboutUsComponent,
    PriceFilterComponent,
    UserProfileComponent,
    AddressComponent,
    OrderViewComponent,
    RatingFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    MatTabsModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSliderModule,
    Ng5SliderModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'myorders',
          component: MyOrdersComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'mycart',
          component: ShoppingCartComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'admin/orders',
          component: AdminOrdersComponent,
          canActivate: [AuthGuard, AdminAuthGuard]
        },
        {
          path: 'admin/product/new',
          component: ProductFormComponent,
          canActivate: [AuthGuard, AdminAuthGuard]
        },
        {
          path: 'admin/products/:id',
          component: ProductFormComponent,
          canActivate: [AuthGuard, AdminAuthGuard]
        },
        {
          path: 'admin/products',
          component: AdminProductsComponent,
          canActivate: [AuthGuard, AdminAuthGuard]
        },
        {
          path: 'products',
          component: ProductsComponent
        },
        {
          path: 'checkout',
          component: CheckoutComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'details/:id',
          component: ProductDetailsComponent
        },
        {
          path: 'blog',
          component: BlogComponent
        },
        {
          path: 'members',
          component: MembersComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'aboutus',
          component: AboutUsComponent
        },
        {
          path: 'myorders',
          component: MyOrdersComponent
        },
        {
          path: 'user/:id',
          component: UserProfileComponent
        },
        {
          path: 'signup',
          component: SignupComponent
        },
        {
          path: 'vieworder/:order',
          component: OrderViewComponent
        },
        {
          path: 'rating',
          component: RatingFormComponent
        }
      ],
      { useHash: true }
    ),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['/auth/']
      }
    })
  ],
  providers: [
    CategoryService,
    ProductService,
    ShoppingCartService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    RatingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
