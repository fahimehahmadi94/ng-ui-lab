import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  name = signal('');

  onNameInput(event :Event){
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }
}
