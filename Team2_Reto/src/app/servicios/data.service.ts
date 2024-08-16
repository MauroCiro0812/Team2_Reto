import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedValue: string | null = null;

  setSelectedValue(value: string): void {
    this.selectedValue = value;
  }

  getSelectedValue(): string | null {
    return this.selectedValue;
  }
}
