import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum Direction {
  increase = "increased by",
  decrease = "decrease by",
};

export interface ILog {
  date: Date;
  direction: Direction;
  value: number;
  newValue: number;
  previousValue: number;
}

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  log$: BehaviorSubject<ILog> = new BehaviorSubject(null as any);

  constructor() { }

  private getPreviousValue(): number {
    const logValue = this.log$.value;
    return logValue?.newValue || 0;
  }

  private generateLog(value: number, direction: Direction): ILog {
    return {
      date: new Date(),
      direction,
      value,
      newValue: this.getPreviousValue() + value,
      previousValue: this.getPreviousValue(),
    };
  }

  increase(value = 1) {
    this.log$.next(this.generateLog(value, Direction.increase));
  }

  decrease(value = 1) {
    this.log$.next(this.generateLog(-value, Direction.decrease));
  }
}
