import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";

// import { TestModule } from "./tests/test.module";


import { AppComponent } from './app.component';

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
    RouterModule.forRoot(routes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
