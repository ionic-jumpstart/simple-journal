import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AppConfigToken, AppConfig } from '../providers/app-config';

import { JournalApp } from './app.component';
import { UserData } from '../providers/user-data';

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
    Storage,
    UserData,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: AppConfigToken, useValue: AppConfig}
  ]
})
export class AppModule {}
