import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from '../shared/material.module';

import { TestAppComponent } from './test-app.component';
import { CardsComponent } from './components/cards/cards.component';



const routes: Routes = [
  {
    path: 'testApp', component: TestAppComponent,
    children: [
      { path: "cards", component: CardsComponent },
      { path: "**", redirectTo: 'cards' }
    ]
  },
  { path: '**', redirectTo: 'testApp' }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],

  declarations: [
    TestAppComponent,
    CardsComponent
  ]
})
export class TestModule { }
