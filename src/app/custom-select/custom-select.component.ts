import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-select',
  imports: [FormsModule, CommonModule],
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() selectId: string = '';
  @Input() options: string[] = [];

  selectedOption: string = '';

  //ControlValueAccessor
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Links the value from the form to the component
  writeValue(value: string): void {
    this.selectedOption = value;
  }

  // Registers a function to handle value changes
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Registers a function to handle "touched" events
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Called when the select value changes
  handleChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedOption = value;
    this.onChange(value);
  }
}
