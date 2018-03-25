import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContentView } from '../content/content.component';

@Component({
  selector: 'app-layout-toggle',
  templateUrl: './layout-toggle.component.html',
  styleUrls: ['./layout-toggle.component.css']
})
export class LayoutToggleComponent implements OnInit {

  @Input() contentView: ContentView;
  @Output() contentViewChange = new EventEmitter<number>();
  onViewChange(value: number) {
    console.log("change " + value);
    this.contentView = value;
    this.contentViewChange.emit(value);
  }

  constructor() { }

  ngOnInit() {

  }

}
