import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';

@NgModule({
  declarations: [AppComponent,ToDoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ToDoComponent,
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
