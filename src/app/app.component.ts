import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({
    "valueData": new FormControl("1", Validators.required),
  });

  constructor(private service: CounterService) { }

  register() {
    this.service.increase(parseInt(this.form.controls.valueData.value || "0", 10));
  }
}
