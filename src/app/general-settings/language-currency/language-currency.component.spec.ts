import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageCurrencyComponent } from './language-currency.component';

describe('LanguageCurrencyComponent', () => {
  let component: LanguageCurrencyComponent;
  let fixture: ComponentFixture<LanguageCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageCurrencyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
