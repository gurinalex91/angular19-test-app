import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { InfoComponent } from './general-settings/info/info.component';
import { LanguageCurrencyComponent } from './general-settings/language-currency/language-currency.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    HeaderComponent,
    TitleComponent,
    TabsComponent,
    TabComponent,
    InfoComponent,
    LanguageCurrencyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
