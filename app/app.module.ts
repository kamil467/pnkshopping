import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { MarketplacePage } from "../pages/marketplace/marketplace";
//import { MyorderPage } from "../pages/myorder/myorder";
//import { AccountPage } from "../pages/account/account";
import { ShoplistPage } from "../pages/shoplist/shoplist";
import { ProductCategoryListPage } from "../pages/product-category-list/product-category-list";
import { ProductListPage } from "../pages/product-list/product-list";
import { ShopListProvider } from "../providers/shop-list/shop-list";
import { ProductCategoryProvider } from "../providers/product-category/product-category";
import { ProductProvider } from "../providers/product/product";
import { BasketProvider } from "../providers/basket/basket";
import { BasketPage } from "../pages/basket/basket";
import { FooterBasketComponent } from "./footer-basket/footer-basket.component";
import { MyOrderPage } from "../pages/myorder/myorder";
//import { AccordionModule } from "./accordion/accordion.module";
import 'reflect-metadata';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MarketplacePage,
    ShoplistPage,
    ProductCategoryListPage,
    ProductListPage,
    BasketPage,
    FooterBasketComponent,
    MyOrderPage,
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MarketplacePage,
    ShoplistPage,
    ProductCategoryListPage,
    ProductListPage,
    BasketPage,
    MyOrderPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ShopListProvider,
    ProductProvider,
    ProductCategoryProvider,
    BasketProvider
  ]
})
export class AppModule {}
