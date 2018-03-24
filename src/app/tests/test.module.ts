import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { TestAppComponent } from './test-app.component';
import { CardsComponent } from './components/cards/cards.component';


const routes: Routes = [
  {
    path: 'cards', component: TestAppComponent,
    children: [
      { path: "cards", component: CardsComponent },
      { path: "**", redirectTo: 'cards' }
    ]
  },
  { path: '**', redirectTo: 'cards' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  declarations: [
    TestAppComponent,
    CardsComponent
  ]
})
export class TestModule { }
