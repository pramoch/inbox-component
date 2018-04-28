import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';
import { MAILS } from '../mock-mails';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  mails = MAILS;

  constructor() { }

  ngOnInit() {
  }

}
