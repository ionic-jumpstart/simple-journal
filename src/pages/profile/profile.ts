import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  profile = {
    name  : '',
    email : '',
    phone : '',
    sns   : {
      facebook : null,
      twitter  : null
    }
  }

  constructor(
    private navCtrl   : NavController, 
    private navParams : NavParams,
    private userData  : UserData
  ) {}

  ionViewDidLoad() {
    this.userData.getProfileInfo().subscribe((profile) => {
      this.profile = profile;
    });
  }

}
