import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomSelectComponent } from '../../custom-select/custom-select.component';

@Component({
  selector: 'app-language-currency',
  imports: [FormsModule, CustomSelectComponent],
  templateUrl: './language-currency.component.html',
  styleUrls: [
    './language-currency.component.scss',
    '../general-settings.styles.scss',
  ],
})
export class LanguageCurrencyComponent {
  languages: string[] = ['English', 'Francias', 'Italian'];
  currencies: string[] = ['USD', 'GBP', 'EUR'];

  selectedLanguage: string = 'English';
  selectedCurrencies: string = 'USD';
}
