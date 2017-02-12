import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { 
  NavController, 
  NavParams,
  AlertController,
  LoadingController 
} from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email    : string;
  password : string;

  constructor(
    private navCtrl     : NavController,
    private alertCtrl   : AlertController,
    private loadingCtrl : LoadingController,
    private userData    : UserData
  ) {}

  onLogin(loginForm : NgForm) {
    // Perform authentication only if form is valid
    if (loginForm.invalid){
      return;
    }

    // Create loading dialog
    // Mock the loading as well to 2 seconds
    let loader = this.loadingCtrl.create({
      content: 'Please wait..'
    });

    loader.present();
    setTimeout(() => {
      this.userData.authenticate(this.email, this.password).subscribe(
        (data) => {
          // Login Successful
          console.info(data);
          loader.dismiss();
        },
        (err) => {
          // Login Failed, display error message
          let alert = this.alertCtrl.create({
            title   : 'Error',
            message : err,
            buttons : [ 'Close' ]
          });

          alert.present();
          loader.dismiss();
        }
      );
    }, 2000);
  }

  goSignup() {
    // Set the root instead pushing the page so it will not being added into the history stack
    this.navCtrl.setRoot(SignupPage);
  }
}
