import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../mail';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() mails: Mail[];

  selectedItem: ListItemComponent;

  constructor() { }

  ngOnInit() {
  }

  onSelect(mail: ListItemComponent) {
    if (this.selectedItem) {
      this.selectedItem.selected = false;
    }

    this.selectedItem = mail;
  }

}
