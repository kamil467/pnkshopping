import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Shop, StoreServiceArea} from '../../entity/shop-entity';
import 'rxjs/add/observable/of';

/*
  Generated class for the ShopListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopListProvider {
/* Data Initialization */

storeServiceArea : StoreServiceArea[] = [
  {
    id:"autoId",
    cityName:"Panaikulam",
    pincode:623522,
    storecode:"1993"
  },
  {
    id:"autoId",
    cityName:"Puduvalasai",
    pincode:623522,
    storecode:"1993"
  },
]

data :Shop[]=[
  {
    id:"autoId",
    name:"ABC Elite Shop",
 location:"Near East Bus stop",
 tileImageUrl:null,
 deliverySpeed:"10 to 15 mins",
 operationHours:"10Am to 8PM",
 description:"We are offering best quality grocery products",
 status:"a",
 serviceArea:this.storeServiceArea,
 storeCode:"1993",
 categoryCode:"sprmrk" ,
 shopContactNumber1:9042810232,
 shopContactNumber2:8884081427,
  },

  {
    id:"autoId",
    name:"XYZ Premium Shop",
 location:"Near West Bus stop",
 tileImageUrl:null,
 deliverySpeed:"15 to 30 mins",
 operationHours:"6PM to 10PM",
 description:"We are offering best quality fresh vegetables and nuts.",
 status:"a",
 serviceArea:this.storeServiceArea,
 storeCode:"1999",
 categoryCode:"fdrst",
 shopContactNumber1:9042810232,
 shopContactNumber2:8884081427,
  }
];
  /* Data Initialization */

  getShopsByCategory(categoryCode:string):Observable<Shop[]>
  {
     return Observable.of(this.data);
  }

}
