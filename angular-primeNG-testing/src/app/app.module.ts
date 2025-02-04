import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    // RouterModule.forRoot([]),  // Initialize routing (empty routes here)
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
