import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {

  currentRate = 0;
  title: string;
  review: string;
  @Input() productId;
  ratingError = false;

  constructor(public activeModal: NgbActiveModal,
    private ratingService: RatingService) {}

  ngOnInit() {
  }

  saveRating(ratingForm: any) {
    ratingForm.user = 1;
    ratingForm.rating = this.currentRate;
    this.ratingService.saveRating(this.productId, ratingForm).subscribe(result => {
      this.activeModal.close('Rating saved successfully');
      console.log(result);
    }, error => {
      this.ratingError = true;
      console.log(error);
    });
  }

}
