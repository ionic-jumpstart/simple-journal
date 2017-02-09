import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { JournalApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { WritePage } from '../pages/write/write';
import { SettingsPage } from '../pages/settings/settings';
import { FeedPage } from '../pages/feed/feed';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    JournalApp,
    LoginPage,
    SignupPage,
    WritePage,
    SettingsPage,
    FeedPage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(JournalApp, {
      tabsPlacement: 'top',
      platforms: {
        android: {
          tabsPlacement: 'top'
        },
        ios: {
          tabsPlacement: 'bottom'
        },
        windows: {
          tabsPlacement: 'top'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    JournalApp,
    LoginPage,
    SignupPage,
    WritePage,
    SettingsPage,
    FeedPage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
