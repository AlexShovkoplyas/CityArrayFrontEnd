import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sort-menu',
  templateUrl: './sort-menu.component.html',
  styleUrls: ['./sort-menu.component.css']
})
export class SortMenuComponent implements OnInit {

  @Input() dataList: string[];

  sortDirection : boolean;
  @Output() sortChange = new EventEmitter<string>();
  @Output() directionChange = new EventEmitter<boolean>();

  changeSort(field : string){
    console.log("sort change :" + field);
    this.sortChange.emit(field);
  }
  changeDirection(){
    this.sortDirection = !this.sortDirection;
    console.log("sort direction :" + this.sortDirection);
    this.directionChange.emit(this.sortDirection);
  }

  test(item:string){
    console.log(item);
  }

  constructor() { }

  ngOnInit() {
    this.sortDirection = true; //descending
  }

}
