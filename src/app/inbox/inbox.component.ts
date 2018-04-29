import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../mail';
import { MAILS } from '../mock-mails';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  @Input() endpoint: string;
  mails: Mail[];

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.getMails();
  }

  getMails(): void {
    this.mailService.getMails(this.endpoint)
      .subscribe(mails => this.mails = mails);
  }

}
