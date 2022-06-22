import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService, ILog } from './counter.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'countby',
  template: `
    <div class="log-container">
      <div *ngFor="let log of logs" class="log-record">
        <ng-container *ngIf="log">
          <div>[{{ log.date | date:'medium' }}]</div>
          <div>User {{ log.direction }} {{ abs(log.value) }}. Previous value was {{ log.previousValue }} and now is {{ log.newValue }}</div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
    }

    .log-container {
      display: flex;
      flex-direction: column;
      flex: 1;

      .log-record {
        display: flex;

        > div {
          margin-right: 5px;
        }
      }
    }
  
  `]
})
export class CountbyComponent {

  logs: ILog[] = [];

  constructor(service: CounterService) {
    service.log$.pipe(
      tap(record => this.logs.push(record))
    ).subscribe();
  }

  abs(n: number): number {
    return Math.abs(n);
  }
}
