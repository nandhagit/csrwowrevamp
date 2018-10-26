import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  saveRating(productId, rating) {
    return this.http.post('/wow/saveRating', { product: productId, rating: rating });
  }
}
