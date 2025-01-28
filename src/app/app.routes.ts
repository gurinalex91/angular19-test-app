import { Routes } from '@angular/router';
import { InfoComponent } from './general-settings/info/info.component';
import { LanguageCurrencyComponent } from './general-settings/language-currency/language-currency.component';

export const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'general-settings/info', component: InfoComponent },
  {
    path: 'general-settings/language-currency',
    component: LanguageCurrencyComponent,
  },
];
