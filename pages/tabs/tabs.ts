import { Component } from "@angular/core";

import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { MarketplacePage } from "../marketplace/marketplace";
import { MyOrderPage } from "../myorder/myorder";
//import { AccountPage } from "../account/account";
//import { MyorderPage } from "../myorder/myorder";
@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = MarketplacePage;
  tab2Root = MyOrderPage;
  tab3Root = AboutPage;

  constructor() {}
}
