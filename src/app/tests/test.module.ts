<<<<<<< HEAD
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
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { CardsComponent } from './components/cards/cards.component';

const routes : Routes = [
  {path:'cards', component: CardsComponent},
  {path:'**', redirectTo:'cards'}
>>>>>>> b1e93c749dd328889e9fca668e524a8d62069489
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
<<<<<<< HEAD
  declarations: [
    TestAppComponent,
    CardsComponent
  ]
=======
  declarations: [CardsComponent]
>>>>>>> b1e93c749dd328889e9fca668e524a8d62069489
})
export class TestModule { }
