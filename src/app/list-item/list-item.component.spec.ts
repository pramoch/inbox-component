import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { DatePipe } from '@angular/common';
import { Mail } from '../mail';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  let datePipeStub: Partial<DatePipe>;
  const defaultMail = {
    from: {
      name: 'Now TV',
      email: 'nowtv@test.com'
    },
    date: '2018-04-26T17:00:00.000Z',
    subject: 'Grab another Pass, you need to be watching this...',
    body: 'Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.'
  };

  beforeEach(async(() => {
    // stub DatePipe for test purposes
    datePipeStub = {
      transform: (date: Date, format: string) => format
    };

    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ],
      providers: [
        { provide: DatePipe, useValue: datePipeStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.mail = defaultMail;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('display month and day if date is not today', () => {
    component.mail = defaultMail;
    fixture.detectChanges();

    expect(component.date).toBe('MMM dd');
  });

  it('display time if date is today', () => {
    defaultMail.date = new Date().toJSON();
    component.mail = defaultMail;
    fixture.detectChanges();

    expect(component.date).toBe('HH:mm');
  });
});
