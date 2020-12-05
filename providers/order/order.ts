import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { BasketProvider } from "../basket/basket";
import { BasketFooterObj, BasketObj } from "../../entity/basket-entity";
import { OrderSummary, OrderSummaryToBeDisplayed } from "../../entity/order-entity";
import { DateTime, List } from "ionic-angular";

@Injectable()
export class OrderProvider {

 // Data initilaization//

orderSummaryToDisplay:OrderSummaryToBeDisplayed=
{
  orderSummary : {
    id:"1",
    additionalRequest:"bring paper cup 1",
    customerId:"1001",
    shopCode:1234,
    shopName:"ABC elite shop",
    status:"a",
    orderStage:"Prepared",
    totalItems:23,
    totalOrderValue:260,
    reason:"waiting to handover to delivery agent",
    lastUpdatedTimeStamp: new Date()
  },
  orderItems:[
    {
      orderItemId:"O123",
      name:"Lays Green",
      pricePerQuantity:5,
      productId:"3090",
      productImageUrl:null,
      quantity:5,
      totalPrice:25
    },
    {
      orderItemId:"O127",
      name:"Orio Biscuit",
      pricePerQuantity:20,
      productId:"3040",
      productImageUrl:null,
      quantity:5,
      totalPrice:25
    },
  ]
}
 // End-Data initialization
  basketObj: BasketObj;
  footerObj: BasketFooterObj;
  constructor(private basketProvider: BasketProvider) {
    this.basketProvider
      .getFooterObjForOrder()
      .subscribe(f => (this.footerObj = f));
    this.basketProvider
      .getBasketForOrder()
      .subscribe(b => (this.basketObj = b));
  }
  
placeOrder():Observable<number>
{
  //make calls to firebase and update the order.
 return Observable.of(1); // 1- success
}
getActiveOrder(customerId:string):Observable<OrderSummaryToBeDisplayed[]>
{
  let orderSummaryArray : OrderSummaryToBeDisplayed[] =[
    this.orderSummaryToDisplay
  ] 
 return Observable.of(orderSummaryArray);
}

}
