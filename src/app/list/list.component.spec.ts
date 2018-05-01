import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { DatePipe } from '@angular/common';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  let datePipeStub: Partial<DatePipe>;

  beforeEach(async(() => {
    // stub DatePipe for test purposes
    datePipeStub = {
      transform: (date: Date, format: string) => format
    };

    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        ListItemComponent
      ],
      providers: [
        { provide: DatePipe, useValue: datePipeStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;

    component.mails = [
      {
        from: {
          name: 'Now TV',
          email: 'nowtv@test.com'
        },
        date: '2018-04-26T17:00:00.000Z',
        subject: 'Grab another Pass, you need to be watching this...',
        body: 'Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.'
      },
      {
        from: {
          name: 'Investopedia Terms',
          email: 'investopedia@test.com'
        },
        date: '2018-04-26T17:00:00.000Z',
        subject: 'What is \'Fibonanci Retracement\'?',
        body: 'Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).'
      },
      {
        from: {
          name: 'ASICS Greater Manchester Marathon',
          email: 'events@human-race.co.uk'
        },
        date: '2018-04-26T17:00:00.000Z',
        subject: 'Your chance to take on the marathon',
        body: 'Do you feel inspired to take on one of Europe\'s most highly regarded and popular marathons?'
      },
      {
        from: {
          name: 'Now TV',
          email: 'nowtv@test.com'
        },
        date: '2018-04-26T17:00:00.000Z',
        subject: 'Grab another Pass, you need to be watching this...',
        body: 'Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.'
      },
      {
        from: {
          name: 'Investopedia Terms',
          email: 'investopedia@test.com'
        },
        date: '2018-04-26T17:00:00.000Z',
        subject: 'What is \'Fibonanci Retracement\'?',
        body: 'Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).'
      },
      {
        from: {
          name: 'ASICS Greater Manchester Marathon',
          email: 'events@human-race.co.uk'
        },
        date: '2018-04-26T17:00:00.000Z',
        subject: 'Your chance to take on the marathon',
        body: 'Do you feel inspired to take on one of Europe\'s most highly regarded and popular marathons?'
      }
    ];
    fixture.detectChanges();
  });

  afterEach(() => {
    component.mails = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display all mails if pageSize is not specified', () => {
    const el = fixture.nativeElement;
    const items = el.querySelectorAll('app-list-item');
    expect(items.length).toBe(6);
  });

  it('display limited number of mails if pageSize is specified', () => {
    component.pageSize = 3;
    fixture.detectChanges();

    const el = fixture.nativeElement;
    const items = el.querySelectorAll('app-list-item');
    expect(items.length).toBe(3);
  });
});
