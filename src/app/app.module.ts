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
import { BodyComponent } from './body/body.component';
import { Body1Component } from './body1/body1.component';
import { MenuComponent } from './menu/menu.component';
import { Body2Component } from './body2/body2.component';
import { ArticleComponent } from './article/article.component';
import { FormPretComponent } from './form-pret/form-pret.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    SitelogoComponent,
    HomeImageComponent,
    HeaderComponent,
    HomebgComponent,
    TextHomeComponent,
    ItemMenuComponent,
    BodyComponent,
    Body1Component,
    MenuComponent,
    Body2Component,
    ArticleComponent,
    FormPretComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
