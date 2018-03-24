import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-app',
  template: `
    <p>
      test-app works!
    </p>
    <app-cards></app-cards>
  `,
  styles: []
})
export class TestAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
