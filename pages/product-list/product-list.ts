import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { ProductProvider } from "../../providers/product/product";
import { Product } from "../../entity/product-category-entity";
import { BuildGridArray } from "../../Utility/GridViewHelper";
import { BasketPage } from "../basket/basket";
import { Shop } from "../../entity/shop-entity";
import { BasketProvider } from "../../providers/basket/basket";
import { BasketFooterObj, BasketObj, OrderItem } from "../../entity/basket-entity";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-product-list",
  templateUrl: "product-list.html",
  styleUrls: ["product-list.scss"]
})
export class ProductListPage implements OnInit {
  allProducts: Product[];
  rowItems: Array<Product[]>;
  shop: Shop;
  basketObj: BasketObj;
  basketFooterObj: BasketFooterObj;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public productProvider: ProductProvider,
    public basketProvider: BasketProvider
  ) {
    this.shop = this.navParams.get("shop");
  }
ngOnInit(): void {
this.basketProvider.getBasketObj(this.shop.storeCode)
.subscribe(b => this.basketObj = b);
  if(this.basketObj.items != undefined){
  this.basketProvider.getFooterObj(this.basketObj.items)
  .subscribe(f => this.basketFooterObj = f);
  }
  else
  {
    this.basketFooterObj ={
      storecode:"storecode",
      totalBasket:0,
      totalItemCount:0,
    };
  }
}
  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductListPage");
    this.productProvider
      .getAllProductsByCategory("code")
      .subscribe(p => (this.allProducts = p));
    this.rowItems = BuildGridArray(this.allProducts, 2);
  }
  async viewBasket(storecode:string) {
    this.navCtrl.push(BasketPage,{storecode:storecode});
  }
  ionViewWillEnter() {
      this.basketProvider.getFooterObj(this.basketObj.items)
  .subscribe(f => this.basketFooterObj = f); // refresh the basket everytime.// local call - no expensive service call.
  }

  addToBasket(product: Product) {
    // build orderItem.
     this.basketProvider.addItemToBasket(product);
         this.basketProvider.getFooterObj(this.basketObj.items)
  .subscribe(f => this.basketFooterObj = f); // refresh the basket everytim.// local call - no expensive service call.
  }
}
