import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitelogoComponent } from './sitelogo/sitelogo.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { HeaderComponent } from './header/header.component';
import { HomebgComponent } from './homebg/homebg.component';
import { TextHomeComponent } from './text-home/text-home.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SitelogoComponent,
    HomeImageComponent,
    HeaderComponent,
    HomebgComponent,
    TextHomeComponent,
    ItemMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
