import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MailService } from './mail.service';


@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MailService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
