import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomSelectComponent } from '../../custom-select/custom-select.component';

@Component({
  selector: 'app-info',
  imports: [CustomSelectComponent, FormsModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss', '../general-settings.styles.scss'],
})
export class InfoComponent {
  timezones: string[] = [
    'UTC-12',
    'UTC-11',
    'UTC-10',
    'UTC-9',
    'UTC-8',
    'UTC-7',
    'UTC-6',
    'UTC-5',
    'UTC-4',
    'UTC-3',
    'UTC-2',
    'UTC-1',
    'UTC+0',
    'UTC+1',
    'UTC+2',
    'UTC+3',
    'UTC+4',
    'UTC+5',
    'UTC+6',
    'UTC+7',
    'UTC+8',
    'UTC+9',
    'UTC+10',
    'UTC+11',
    'UTC+12',
  ];
  countries: string[] = ['Germany', 'France', 'Italy'];
  cities: string[] = ['Berlin', 'Munich', 'Hamburg'];
  provinces: string[] = ['Berlin', 'Bavaria', 'Saxony', 'Brandenburg'];

  selectedTimezone: string = 'UTC-2';
  selectedCountry: string = 'Germany';
  selectedCity: string = 'Berlin';
  selectedProvince: string = 'Berlin';
}
