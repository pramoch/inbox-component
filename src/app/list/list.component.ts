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
  @Input() pageSize: number;

  selectedItem: ListItemComponent;

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: ListItemComponent) {
    if (item !== this.selectedItem) {
      if (this.selectedItem) {
        this.selectedItem.selected = false;
      }

      this.selectedItem = item;
    }
  }

  onScroll(event: any) {
    const element = event.target;

    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (this.pageSize * 2 > this.mails.length) {
        this.pageSize = this.mails.length;
      } else {
        this.pageSize *= 2;
      }
    }
  }

}
