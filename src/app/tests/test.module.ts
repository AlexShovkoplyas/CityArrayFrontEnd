import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { CardsComponent } from './components/cards/cards.component';

const routes : Routes = [
  {path:'cards', component: CardsComponent},
  {path:'**', redirectTo:'cards'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardsComponent]
})
export class TestModule { }
