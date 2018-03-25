import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../../services/reviews.service';
import { ReviewInfo } from '../../../models/review';

export enum ContentView {
  cards = 1,
  list = 2,
  table = 3
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentView: ContentView;
 
  reviews: ReviewInfo[];

  constructor(private reviewsService: ReviewsService) { }

  getReviews(): void {
    this.reviews = this.reviewsService.GetReviews();
  }

  ngOnInit() {
    this.getReviews();
    this.contentView = ContentView.cards;
  }

}
