import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ReviewsService } from './services/reviews.service';

const routes : Routes = [
  {path:'test', loadChildren : './tests/test.module#TestModule'},
  {path:'**', redirectTo: 'test'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [
    ReviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
