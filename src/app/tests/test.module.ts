import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TestAppComponent } from './test-app.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoggingComponent } from './components/logging/logging.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContentComponent } from './components/content/content.component';
import { LayoutToggleComponent } from './components/layout-toggle/layout-toggle.component';





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
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],

  declarations: [
    TestAppComponent,
    CardsComponent,
    NavbarComponent,
    LoggingComponent,
    SidenavComponent,
    ContentComponent,
    LayoutToggleComponent
  ]
})
export class TestModule { }
