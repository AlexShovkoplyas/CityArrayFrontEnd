import { Component, OnInit, Input } from '@angular/core';
import { ReviewInfo } from '../../../models/review';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() review: ReviewInfo;

  constructor() { }

  ngOnInit() {
  }

}
