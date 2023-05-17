import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LandingComponent } from './views/landing/landing.component';
import { ShopListComponent } from './views/shop-list/shop-list.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { CardShopComponent } from './components/card-shop/card-shop.component';
import { CardLandingComponent } from './components/card-landing/card-landing.component';
import { CardSidebarComponent } from './components/card-sidebar/card-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingComponent,
    ShopListComponent,
    ProductDetailComponent,
    CardShopComponent,
    CardLandingComponent,
    CardSidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
