import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxComponent } from './inbox.component';
import { ListComponent } from '../list/list.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { MailService } from '../mail.service';
import { of } from 'rxjs/observable/of';
import { DatePipe } from '@angular/common';

describe('InboxComponent', () => {
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;

  let mailServiceStub: Partial<MailService>;
  let datePipeStub: Partial<DatePipe>;

  beforeEach(async(() => {
    // stub DatePipe for test purposes
    datePipeStub = {
      transform: (date: Date, format: string) => format
    };

    // stub MailService for test purposes
    mailServiceStub = {
      getMails: (endpoint: string) => of([
        {
          from: {
            name: 'Name',
            email: 'email'
          },
          date: '2018-04-23T17:00:00.000Z',
          subject: 'Valid',
          body: 'Body'
        },
        // no sender
        {
          subject: 'No sender',
          body: 'Body',
          date: '2018-04-23T17:00:00.000Z',
        },
        // no subject & body
        {
          from: {
            name: 'Name',
            email: 'email'
          },
          date: '2018-04-22T17:00:00.000Z',
        },
        // No date
        {
          from: {
            name: 'Name',
            email: 'email'
          },
          subject: 'No date',
          body: 'Body'
        }
      ])
    };

    TestBed.configureTestingModule({
      declarations: [
        InboxComponent,
        ListComponent,
        ListItemComponent
      ],
      providers: [
        { provide: MailService, useValue: mailServiceStub },
        { provide: DatePipe, useValue: datePipeStub }
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

  it('filter invalid mail', () => {
    expect(component.mails.length).toBe(1);
    expect(component.mails[0].subject).toBe('Valid');
  });
});
