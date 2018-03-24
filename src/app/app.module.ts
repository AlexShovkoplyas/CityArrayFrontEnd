import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from "@angular/router";

// import { TestModule } from "./tests/test.module";
=======
import { RouterModule, Routes } from "@angular/router";

import { TestModule } from "./tests/test.module";
>>>>>>> b1e93c749dd328889e9fca668e524a8d62069489
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
<<<<<<< HEAD
    // TestModule,
    RouterModule.forRoot(routes),    
=======
    RouterModule.forChild(routes),
    TestModule
>>>>>>> b1e93c749dd328889e9fca668e524a8d62069489
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
