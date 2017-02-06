import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { WritePage } from '../write/write';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FeedPage;
  tab2Root: any = WritePage;
  tab3Root: any = SettingsPage;

  constructor() {

  }
}
