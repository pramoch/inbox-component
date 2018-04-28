import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../mail';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() mails: Mail[];

  constructor() { }

  ngOnInit() {
  }

}
