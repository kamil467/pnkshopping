import { Component } from "@angular/core";
import { NavController, NavParams, IonicPage,LoadingController, Loading,AlertController  } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-myorder",
  templateUrl: "myorder.html",
  styleUrls: ["myorder.scss", "myorder.css"]
})
export class MyOrderPage {
  orders:any;
  loading:Loading;
  constructor(public navCtrl: NavController, public navParams: NavParams,private loader:LoadingController,private alertController:AlertController) {
  this.loading = this.loader.create({
    content: 'Please wait...'
  });

  }
  active() {
    console.log("loader clicked");
    this.loading.present().then(setTimeout(() => {
    this.loading.dismiss();
    // error occurred. retry again.
    this.presentError();
  }, 5000));
  }
  history() {
    console.log("loader stopped");
    this.loading.dismiss();
  }
    presentError() {
  let alert = this.alertController.create({
    title: 'Error Occurred',
    message: 'Please check your internet connection or restart app.',
    buttons: [
      {
        text: 'Ok',
        handler: () => {
          console.log('Ok clicked');
          
        }
      }
    ]
  });
  alert.present();
}
}
