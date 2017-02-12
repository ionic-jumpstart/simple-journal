import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { UserData } from '../providers/user-data';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class JournalApp {
  // The root page of application
  rootPage : any;

  constructor(
    private platform : Platform,
    private events   : Events,
    private userData : UserData
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // Check whether user has been logged in
    this.userData.getToken().subscribe(
      (token) => {
        if (token) {
          this.rootPage = TabsPage;
        }
        else {
          this.rootPage = LoginPage;
        }
      }
    );

    this.registerUserEvents();
  }

  private registerUserEvents() {
    this.events.subscribe('user:login', (info) => {
      this.rootPage = TabsPage;
    });

    this.events.subscribe('user:logout', () => {
      this.rootPage = LoginPage;
    });
  }
}
