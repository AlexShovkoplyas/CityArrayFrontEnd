import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { ReviewInfo } from '../models/review';

@Component({
  selector: 'app-test-app',
  templateUrl: "./test-app.component.html",
  styleUrls: ["./test-app.component.css"]
})
export class TestAppComponent implements OnInit {

  reviews: ReviewInfo[];

  constructor(private reviewsService: ReviewsService) { }



  getReviews(): void {
    this.reviews = this.reviewsService.GetReviews();
  }

  ngOnInit() {
    this.getReviews();
  }

}
