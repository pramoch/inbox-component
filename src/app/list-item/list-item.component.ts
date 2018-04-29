import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../mail';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() mail: Mail;
  color: string;
  date: string;
  colors = [
    '#90A4AE',
    '#7986CB',
    '#9FA8DA',
    '#F6BF26',
    '#BA68C8',
    '#FFA726',
    '#5E97F6',
    '#B39DDB',
    '#9575CD',
    '#57BB8A',
    '#FF8A65'
  ];

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.color = this.colors[this.mail.from.name.charCodeAt(0) % 11];

    const date = new Date(this.mail.date);
    const now = new Date();

    if (date.toDateString() === now.toDateString()) {
      // Today
      this.date = this.datePipe.transform(date, 'HH:mm');
    } else {
      this.date = this.datePipe.transform(date, 'MMM dd');
    }
  }

}
