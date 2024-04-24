import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Listing1Component } from './listing1/listing1.component';
import { Listing2Component } from './listing2/listing2.component';
import { Listing3Component } from './listing3/listing3.component';

@NgModule({
  declarations: [
    AppComponent,
    Listing1Component,
    Listing2Component,
    Listing3Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
