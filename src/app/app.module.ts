import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitelogoComponent } from './sitelogo/sitelogo.component';
import { HomeImageComponent } from './home-image/home-image.component';

@NgModule({
  declarations: [
    AppComponent,
    SitelogoComponent,
    HomeImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
