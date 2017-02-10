import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  fullname        : string;
  email           : string;
  password        : string;
  confirmPassword : string;

  constructor(
      private navCtrl  : NavController
  ) {}

  onRegister(registerForm : NgForm) {
      // TODO: Register the user based on form input
  }

  goLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
