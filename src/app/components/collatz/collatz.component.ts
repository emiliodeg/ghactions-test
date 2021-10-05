import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.scss']
})
export class CollatzComponent {
  initialValue: number;

  get secuency(): number[] {
    if (!this.initialValue) {
      return [];
    }

    let value = this.initialValue;
    const result = [value];

    while (value !== 1) {
      if (value % 2 === 1) {
        value = value * 3 + 1;
      } else {
        value /= 2;
      }

      result.push(value);
    }

    return result;
  }
}
