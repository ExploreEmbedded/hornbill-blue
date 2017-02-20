import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BLE} from 'ionic-native';

/*
  Generated class for the Robo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-robo',
  templateUrl: 'robo.html'
})

export class RoboPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoboPage');
  }

  moveRobo = function(direction:number){
      console.log(this.navParams.data);
      console.log(direction);
      console.log(this.navParams.data[0]);
      console.log(this.navParams.data[1]);


       var data = new Uint8Array(1);
       data[0] = direction;
       console.log(data.buffer);
       BLE.write(this.navParams.data[1], this.navParams.data[0], "ff01", data.buffer);
  }

}
