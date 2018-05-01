import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxComponent } from './inbox.component';
import { ListComponent } from '../list/list.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { MailService } from '../mail.service';
import { of } from 'rxjs/observable/of';

describe('InboxComponent', () => {
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;

  let mailServiceStub: Partial<MailService>;

  beforeEach(async(() => {
    // stub MailService for test purposes
    mailServiceStub = {
      getMails: (endpoint: string) => of([])
    };

    TestBed.configureTestingModule({
      declarations: [
        InboxComponent,
        ListComponent,
        ListItemComponent
      ],
      providers: [
        { provide: MailService, useValue: mailServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
