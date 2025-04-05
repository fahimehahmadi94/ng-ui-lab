import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ccounter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ccounter.component.html',
  styleUrl: './ccounter.component.scss'
})
export class CcounterComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1)
  }
}
