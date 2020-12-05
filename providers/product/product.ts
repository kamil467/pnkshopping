import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../../entity/product-category-entity";
import { Observable } from "rxjs/Observable";
/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  /* Data Initialization */

  productList: Product[] = [
    {
      id: "1",
      inStock: true,
      message: null,
      name: "Lays",
      price: 25,
      offeredPrice: 22,
      size: "5 Packet",
      status: "a",
      productImageUrl: null
    },
    {
      id: "2",
      inStock: true,
      message: null,
      name: "Britania Biscuit",
      price: 20,
      offeredPrice: 17,
      size: "1 Packet",
      status: "a",
      productImageUrl: null
    },
    {
      id: "3",
      inStock: true,
      message: null,
      name: "Milk Bikies",
      price: 10,
      offeredPrice: 9,
      size: "1 Packet",
      status: "a",
      productImageUrl: null
    },
    {
      id: "4",
      inStock: false,
      message: null,
      name: "Good Day",
      price: 30,
      offeredPrice: 25,
      size: "3 Packet",
      status: "a",
      productImageUrl: null
    },
    {
      id: "5",
      inStock: true,
      message: null,
      name: "Orio Biscuits",
      price: 20,
      offeredPrice: 18,
      size: "1 Packet",
      status: "a",
      productImageUrl: null
    },
    {
      id: "6",
      inStock: true,
      message: null,
      name: "Tiger Biscuit",
      price: 20,
      offeredPrice: 15,
      size: "2 Packet",
      status: "a",
      productImageUrl: null
    },
    {
      id: "7",
      inStock: true,
      message: null,
      name: "Cream Cookie",
      price: 30,
      offeredPrice: 27,
      size: "3 Packet",
      status: "a",
      productImageUrl: null
    },
    {
      id: "8",
      inStock: true,
      message: null,
      name: "Boost Biscuits",
      price: 23,
      offeredPrice: 20,
      size: "1 Packet",
      status: "a",
      productImageUrl: null
    },
    {
      id: "9",
      inStock: false,
      message: null,
      name: "Mari Gold",
      price: 25,
      offeredPrice: 22,
      size: "1 Packet",
      status: "a",
      productImageUrl: null
    },
    {
      id: "10",
      inStock: true,
      message: null,
      name: "Hide and Seek",
      price: 40,
      offeredPrice: 35,
      size: "2 Packet",
      status: "a",
      productImageUrl: null
    }
  ];
  /* Data Initialization */
  constructor() {
    console.log("Hello ProductProvider Provider");
  }

  getAllProductsByCategory(categoryCode: string): Observable<Product[]> {
    return Observable.of(this.productList);
  }
}
