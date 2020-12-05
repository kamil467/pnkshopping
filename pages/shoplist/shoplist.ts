import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ProductCategoryListPage } from "../product-category-list/product-category-list";
import { ShopListProvider } from "../../providers/shop-list/shop-list";
import { Shop } from "../../entity/shop-entity";

/**
 * Generated class for the ShoplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-shoplist",
  templateUrl: "shoplist.html",
    styleUrls: ["shoplist.scss"]
})
export class ShoplistPage {
  shopCategoryCode: string;
  shopListArray: Shop[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopListProvider: ShopListProvider
  ) {
    this.shopCategoryCode = navParams.get("category");
  }

  ionViewDidLoad() {
    this.shopListProvider
      .getShopsByCategory(this.shopCategoryCode)
      .subscribe(shops => (this.shopListArray = shops));
  }
  clickShop(storecode: string) {
    let rightShop = this.shopListArray.find(s => s.storeCode == storecode);
    if(rightShop != undefined)
    {
this.navCtrl.push(ProductCategoryListPage, { shop: rightShop });
    }
    else
    {
      console.log("Couldn't find the shop");
    }
    
  }
}
