import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountbyComponent } from './countby.component';
import { IncrementComponent } from './increment.component';
import { DecrementComponent } from './decrement.component';

@NgModule({
  declarations: [
    AppComponent,
    CountbyComponent,
    IncrementComponent,
    DecrementComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
