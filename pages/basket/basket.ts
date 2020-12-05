import { Component } from "@angular/core";
import { NavController, IonicPage, NavParams } from "ionic-angular";
import { BasketObj, OrderItem } from "../../entity/basket-entity";
import { Product } from "../../entity/product-category-entity";
import { BasketProvider } from "../../providers/basket/basket";
@IonicPage()
@Component({
  selector: "page-basket",
  templateUrl: "./basket.html",
  styleUrls: ["./basket.scss"]
})
export class BasketPage {
  basketItems: BasketObj;
  storecode: string;
  basketTotalAmount: number = 0;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public basketProvider: BasketProvider
  ) {
    this.storecode = this.params.get("storecode");
    this.basketProvider
      .getBasketObj(this.storecode)
      .subscribe(b => (this.basketItems = b));

    if (this.basketItems.items != undefined) {
      this.basketTotalAmount = this.caluclateTotalAmount(
        this.basketItems.items
      );
    }
  }
  addQuantity(item: OrderItem) {
    console.log("Item id is:" + item.productId);
    this.basketProvider.addItemToBasketOverload(item);
    this.basketTotalAmount = this.caluclateTotalAmount(this.basketItems.items);
  }

  caluclateTotalAmount(items: OrderItem[]): number {
    let totalAmount = 0;
    items.forEach(i => {
      totalAmount = totalAmount + i.totalPrice;
    });
    return totalAmount;
  }
  removeQuantity(item: OrderItem) {
    this.basketProvider.removeItemFromBasket(item);
    this.basketTotalAmount = this.caluclateTotalAmount(this.basketItems.items);
  }

  removeEntireProduct(item:OrderItem)
  {
     this.basketProvider.emptyProductAllQuantity(item);
    this.basketTotalAmount = this.caluclateTotalAmount(this.basketItems.items);
  }

  emptyWholeBasket()
  {
    this.basketProvider.emptyBasket();
  }
}
