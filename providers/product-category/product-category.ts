import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategory } from '../../entity/product-category-entity';
import { Observable } from 'rxjs/Observable';
import { ProductListPage } from '../../pages/product-list/product-list';

/*
  Generated class for the ProductCategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductCategoryProvider {

  /* Data Initialization */
  
    categoryList:ProductCategory[] =[
    {
      id:"1",
      imageURL:null,
      name:"Chocalates",
      status:"a",
      storecode:"1993",

    },
    {
      id:"2",
      imageURL:null,
      name:"Fruits",
      status:"a",
      storecode:"1993",

    },
    {
      id:"3",
      imageURL:null,
      name:"Rice & Wheat",
      status:"a",
      storecode:"1993",

    },
    {
      id:"4",
      imageURL:null,
      name:"Soap",
      status:"a",
      storecode:"1993",

    },
    {
      id:"5",
      imageURL:null,
      name:"Shampoo",
      status:"a",
      storecode:"1993",

    },
    {
      id:"6",
      imageURL:null,
      name:"Biscuits",
      status:"a",
      storecode:"1993",

    },
     {
      id:"7",
      imageURL:null,
      name:"Milk Products",
      status:"a",
      storecode:"1993",

    },
    ];

   /* Data Initialization */
   getShopCategory(storecode:string):Observable<ProductCategory[]>
   {
     return Observable.of(this.categoryList);
   }
}
