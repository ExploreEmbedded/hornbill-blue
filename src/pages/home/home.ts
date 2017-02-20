/*
To Do:

 Check if bluetooth is enabled.
 scan button if required
 Handle connection errors


*/


import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {BLE} from 'ionic-native';
import { HornbillServicesPage} from '../hornbill-services/hornbill-services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //devices:{name:string,deviceID:string,rssi:string}[];
  devices = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  this.devices = [];

  this.checkBluetooth();

  }

  //check if bluetooth is enabled on the device.
  checkBluetooth(){
    BLE.isEnabled().then(
      ()=>{
          console.log("Bluetooth is enabled on device");
          this.startScanning();
      },
      ()=>{
          console.log("show message to user");
          this.showConfirm();
      }
    );
  }

  showConfirm() {
      let confirm = this.alertCtrl.create({
      title: 'Turn ON Bluetooth',
      message: 'Looks like phone bluetooth is disabled, enable it and retry!',
      buttons: [
      {
        text: 'Okay',
        handler: () => {
          console.log('Okay');
        }
      }]
      });
      confirm.present();
  }

  startScanning(){
    console.log("Scanning Started");
    BLE.scan([],2).subscribe(device => {
        //this.devices.push = device;
        console.log(JSON.stringify(device));
        console.log(device.name);
        this.devices.push(device);
        //this.stopScanning();
    });
  }


  selectDevice(deviceID:String){

      console.log("device Selected" + deviceID);
      this.navCtrl.push(HornbillServicesPage, deviceID);

  }

  /*
  stopScanning(){
    setTimeout(() => {
       BLE.stopScan().then(() => { console.log('scan stopped'); });
    }, 5000);
  }
  */


}
