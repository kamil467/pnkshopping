import { AfterContentInit, Component, DoCheck,  Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BasketFooterObj } from '../../entity/basket-entity';
import { BasketPage } from '../../pages/basket/basket';
import { BasketProvider } from '../../providers/basket/basket';

@Component({
  selector: 'app-footer-basket',
  templateUrl: './footer-basket.component.html',
  styleUrls: ['./footer-basket.component.scss']
})
export class FooterBasketComponent implements AfterContentInit  {
 @Input() basketFooterObj:BasketFooterObj

  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public basketProvider:BasketProvider) {
    console.log("component called");
   
   }
ngAfterContentInit(): void {
}
viewBasket(storecode:string)
{
 this.navCtrl.push(BasketPage,{storecode:storecode});
}
}