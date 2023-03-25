import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Card } from './components/card/card.component';
import { HandComponent } from './components/hand/hand.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    Card,
    HandComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
