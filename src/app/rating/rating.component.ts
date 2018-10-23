import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input('rating-detail') ratings;

  ratingDashboards: RatingDashboard[] = [];

  ratingNos: number[] = [5, 4, 3, 2, 1];
  colors: string[] = ['success', 'success', 'success', 'warning', 'danger'];

  constructor() { }

  ngOnInit() {
  }

  get averageRating() {
    let totalRating = 0;
    for (let r of this.ratings) {
      totalRating += r.rating;
    }
    return (totalRating / this.ratings.length);
  }

  get reviewsCount() {
    let count = 0;
    for (let r of this.ratings) {
      if (r.review) {
        count += 1;
      }
    }
    return count;
  }

  get ratingDashBoard() {
    this.ratingDashboards = [];
    for (let i in this.ratingNos) {
      let ratingDash: RatingDashboard = new RatingDashboard();
      ratingDash.rating = this.ratingNos[i];
      ratingDash.count = this.getCountOfRating(this.ratingNos[i]);
      ratingDash.color = this.colors[i];
      this.ratingDashboards.push(ratingDash);
    }
    return this.ratingDashboards;
  }

  getCountOfRating(rating: number) {
    let count = 0;
    for (let r of this.ratings) {
      if (r.rating == rating) {
        count += 1;
      }
    }
    return count;
  }

}

class RatingDashboard {
  rating: number;
  count: number;
  color: string;
}
