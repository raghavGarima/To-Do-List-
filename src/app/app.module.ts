import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './component/top/top.component';
import { BodyComponent } from './component/bottom/body/body.component';
@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
