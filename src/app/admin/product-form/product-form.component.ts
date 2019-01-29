import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories: any = [];
  product: any = {};
  id;
  subtypes: any = [];
  selectedFile: File;

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).pipe(take(1)).subscribe(data => {
        this.product = data;
      });
    }
  }

  onChange(val) {
    this.categoryService.getSubTypes(val).subscribe(result => {
      this.subtypes = result;
    });
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(category => {
      this.categories = category;
    });
  }

  save(item: any) {
    let imageURL = 'http://localhost:8080/static/' + this.selectedFile.name;
    if (this.id) {
      this.product.imageURL = imageURL;
      this.productService.updateProduct(this.id, this.product).subscribe(data => {
        this.router.navigate(['/admin/products']);
      },error=>{
        
      });
    } else {
      item.imageURL = imageURL;
      this.productService.saveProduct(item).subscribe(data => {
        this.router.navigate(['/admin/products']);
      }, error => {

      });
    }
    
  }

  delete() {
    if (!confirm('Are you sure?')) { return; }
    this.productService.deleteProduct(this.id).subscribe(data => {

    });
    this.router.navigate(['/admin/products']);
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const data = new FormData();
    data.append('file', this.selectedFile);
    this.productService.uploadProduct(data).subscribe(response => {
      console.log(response);
    });
  }
}
