import { Component, OnInit, Input } from '@angular/core';
import { ReviewInfo } from '../../../../models/review';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cards',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.css']
})
export class CardReviewComponent implements OnInit {

  @Input() review: ReviewInfo;

  constructor(private snackBar: MatSnackBar) { }

  saved: boolean;

  toggleBookmark() {
    this.saved = !this.saved;
    this.snackBar.open("Bookmark was " + (this.saved ? "saved" : "deleted"), "Ok", {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.saved = false;
  }

}
