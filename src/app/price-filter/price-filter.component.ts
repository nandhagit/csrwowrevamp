import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Options } from 'ng5-slider';
import { Router } from '@angular/router';


@Component({
  selector: 'price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css']
})
export class PriceFilterComponent implements OnChanges {

  @Input('minPrice') minValue: number;

  @Input('maxPrice') maxValue: number;

  options: Options;

  constructor(private router: Router) { }

  ngOnChanges() {
    if (this.minValue && this.maxValue) {
      this.options = {
        floor: this.minValue,
        ceil: this.maxValue,
        step: 5
      };
    }
  }

  valueChange(){
    this.router.navigate(['/products'], { queryParams: { min: this.minValue, max: this.maxValue } });
  }


  

}
