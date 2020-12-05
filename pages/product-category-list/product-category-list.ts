import { Component, OnInit, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Navbar,AlertController  } from "ionic-angular";
import { ProductListPage } from "../product-list/product-list";
import { ProductCategoryProvider } from "../../providers/product-category/product-category";
import { ProductCategory } from "../../entity/product-category-entity";
import { BuildGridArray } from "../../Utility/GridViewHelper";
import { BasketProvider } from "../../providers/basket/basket";
import { BasketFooterObj, BasketObj } from "../../entity/basket-entity";
import { Shop } from "../../entity/shop-entity";
import { BasketPage } from "../basket/basket";

/**
 * Generated class for the ProductCategoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-product-category-list",
  templateUrl: "product-category-list.html",
  styleUrls: ["product-category-list.scss"]
})
export class ProductCategoryListPage implements OnInit {
  storecode: string;
  productCategoryList: ProductCategory[];
  categoryListLength: number;
  rowCount: Array<ProductCategory[]>;
  basketFooterObj: BasketFooterObj;
  basketObj: BasketObj;
  @ViewChild(Navbar) navBar: Navbar;

  shop: Shop;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoryListProvider: ProductCategoryProvider,
    private basketProvider: BasketProvider,
    private alertController:AlertController
  ) {
    this.shop = navParams.get("shop");
    console.log(this.shop.name);
  }
  ngOnInit(): void {
    this.categoryListProvider
      .getShopCategory(this.storecode)
      .subscribe(categories => (this.productCategoryList = categories));
    // invoke utility
    this.rowCount = BuildGridArray(this.productCategoryList, 3);
    this.basketProvider
      .initiateBasket(this.shop)
      .subscribe(bask => (this.basketObj = bask));
    console.log("Basket initiated");
    this.basketFooterObj = {
      storecode: this.basketObj.storeCode,
      totalBasket: 0,
      totalItemCount: 0
    };
  }
  ionViewWillEnter() {
    console.log("onViewWillEnter invoked");
    this.basketProvider
      .getFooterObj(this.basketObj.items)
      .subscribe(f => (this.basketFooterObj = f));
  }
  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      // todo something
      // check for items in basket and show popup alert
      // check basaketFooter totlaItemcount.
      if(this.basketFooterObj.totalItemCount != 0){
     this.presentConfirm();
      }
      else
      {
         this.navCtrl.pop();
      }
    };
  }

  categoryClicked(categoryId: string) {
    this.navCtrl.push(ProductListPage, { shop: this.shop });
  }
  ionViewWillUnload() {
    console.log("View unload");
  }
  presentConfirm() {
  let alert = this.alertController.create({
    title: 'Confirm to Shop Home',
    message: 'This will delete the items in your cart?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ok',
        handler: () => {
          console.log('Ok clicked');
          this.navCtrl.pop();
        }
      }
    ]
  });
  alert.present();
}
}
