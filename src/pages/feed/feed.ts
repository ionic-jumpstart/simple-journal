import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  private posts : any = [];

  constructor(
    public navCtrl: NavController
  ) {
  }

  private ionViewDidLoad() {
    this.loadPosts();
  }

  private loadPosts() {
    this.posts = [
      {
        title   : 'A super interesting story',
        time    : 'Febuary 20, 08:30 pm',
        content : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.\n
        Requiescat in pace `
      },
      {
        title   : 'Pada waktu itu',
        time    : 'March 2, 08:30 pm',
        content : `Pada suatu hari, ternyata, kisah tamat selesai`
      },
      {
        title   : 'Auroram videre potest',
        time    : 'January 01, 01:00 am',
        content : 'Dormit deus faciunt dormit perpetua astra deus Auroram videre potest'
      }
    ];
  }

  private refresh(refresher : any) {
    setTimeout(() => {
      this.loadPosts();
      refresher.complete();
    }, 2000);
  }

}
