import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit, OnChanges {

  @Input('categoryid') categoryId;
  @Input('category') category;
  @Input('type') type;
  subtype;
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.categoryId) {
      this.categoryService.getSubTypes(this.categoryId).subscribe(result => {
        this.subtype=result;
      })
    }
  }

}
