import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { DatePipe } from '@angular/common';
import { Mail } from '../mail';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  let datePipeStub: Partial<DatePipe>;

  beforeEach(async(() => {
    // stub DatePipe for test purposes
    datePipeStub = {
      transform: () => ''
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
    component.mail = {
      from: {
        name: 'Now TV',
        email: 'nowtv@test.com'
      },
      date: '2018-04-26T17:00:00.000Z',
      subject: 'Grab another Pass, you need to be watching this...',
      body: 'Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
