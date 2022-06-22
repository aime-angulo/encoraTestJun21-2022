import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'increment',
  template: `<button (click)="increment()">Increment</button>`
})
export class IncrementComponent {

  constructor(private service: CounterService) { }

  increment() {
    this.service.increase();
  }
}
