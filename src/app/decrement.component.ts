import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'decrement',
  template: `<button (click)="decrement()">Decrement</button>`
})
export class DecrementComponent {

  constructor(private service: CounterService) { }

  decrement() {
    this.service.decrease();
  }
}
