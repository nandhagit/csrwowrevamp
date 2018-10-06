import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories;

  product = {};

  id;

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
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
    this.categoryService.getCategories().subscribe(category => {
      this.categories = category;
    });
  }

  save(item) {
    if (this.id) {
      this.productService.updateProduct(this.id, this.product).subscribe(data => {

      });
    } else {
      this.productService.saveProduct(item).subscribe(data => {
      }, error => {
      });
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm("Are you sure?")) return;
    this.productService.deleteProduct(this.id).subscribe(data => {

    })
    this.router.navigate(['/admin/products']);
  }

}
