import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

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
    private navCtrl  : NavController
  ) {}

  onLogin(loginForm : NgForm) {
    // TODO: Authenticate the user
  }

  goSignup() {
    // Set the root instead pushing the page so it will not being added into the history stack
    this.navCtrl.setRoot(SignupPage);
  }
}
