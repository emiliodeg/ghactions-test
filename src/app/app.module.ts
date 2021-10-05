import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CollatzComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
