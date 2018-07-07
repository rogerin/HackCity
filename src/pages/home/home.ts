import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Vibration } from '@ionic-native/vibration';
import * as io from "socket.io-client";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  socket: any;

  constructor(platform: Platform, public navCtrl: NavController, private vibration: Vibration) {

    platform.ready().then(() => {
      this.socket = io.connect('URL');

      this.vibration.vibrate([2000,1000,2000,2000,1000,2000,2000,1000,2000,2000,1000,2000,2000,1000,2000]);
    })


    // this.socket.emit('message', { key: 'value' })
    // this.socket.on("connect", () => {})
    // this.socket.on("message", () => {})
    

  }


  vibrar() {
    this.vibration.vibrate(1000);

    // Vibrate 2 seconds
    // Pause for 1 second
    // Vibrate for 2 seconds
    // Patterns work on Android and Windows only
    this.vibration.vibrate([2000,1000,2000]);

    // Stop any current vibrations immediately
    // Works on Android and Windows only
    //this.vibration.vibrate(0);
  }

}
