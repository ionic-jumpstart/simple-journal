import { Component } from '@angular/core';

import { App, NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';

import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  profile : any;

  constructor(
    private app      : App,
    private navCtrl  : NavController,
    private userData : UserData
  ) {
    
  }

  private ionViewDidLoad() {
    this.userData.getProfileInfo().subscribe((profile) => {
      this.profile = profile;
    });
  }

  private openProfile() {
    // Use application root nav so tabs wont appear
    this.app.getRootNav().push(ProfilePage);
  }

}
