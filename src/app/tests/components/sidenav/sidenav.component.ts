import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  _isCollapsed: boolean = true;
  width: number = 300;

  constructor() { }

  @Input() toggleBar() {

  }

  @Input() isCollapsed() {
    // this.sidenav.toggle();
    // if (this.width == 300) {
    //   this.width = 100;
    // } else {
    //   this.width = 300;
    // }
    console.log("is collapsed = " + this._isCollapsed);
    this._isCollapsed = !this._isCollapsed;
  }

  ngOnInit() {
  }

}
