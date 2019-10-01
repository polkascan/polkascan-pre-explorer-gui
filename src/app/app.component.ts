/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * app.component.ts
 */

import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Polkascan';

  public environment = environment;
  public showNavigation = false;
  public showSubmenus = true;
  public langs = ['en', 'de', 'fr', 'it', 'es', 'zh', 'ja', 'ko', 'ru', 'uk'];
  public selectedLanguage = 'en';

  constructor(private router: Router, private translate: TranslateService) {
    router.events.subscribe((val) => {
        this.showNavigation = false;
    });
    translate.addLangs(this.langs);
    translate.setDefaultLang('en');

    this.selectedLanguage = translate.getBrowserLang().match(/en|de|fr|it|es|zh|ja|ko|ru|uk/) ? translate.getBrowserLang() : 'en';
    translate.use(this.selectedLanguage);
  }

  toggleNavigation() {
    this.showNavigation = !this.showNavigation;
  }

  toggleSubmenus() {
    this.showSubmenus = false;

    setTimeout(() => { this.showSubmenus = true; }, 300);

  }

  langsTitle(selectedLang: string) {
    switch (selectedLang) {
      case 'de':
        return 'Deutsche';
      case 'fr':
        return 'Française';
      case 'it':
        return 'Italiano';
      case 'es':
        return 'Español';
      case 'zh':
        return '中國';
      case 'ja':
        return '日本語';
      case 'ko':
        return '한국어';
      case 'ru':
        return 'Русский';
      case 'uk':
        return 'Українська';
      default:
        return 'English';
    }
  }
}
