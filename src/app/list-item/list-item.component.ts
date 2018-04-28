import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../mail';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() mail: Mail;

  constructor() { }

  ngOnInit() {
  }

}
