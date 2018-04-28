import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
