import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { MailService } from '../mail.service';
import { of } from 'rxjs/observable/of';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  let mailServiceStub: Partial<MailService>;

  beforeEach(async(() => {
    // stub MailService for test purposes
    mailServiceStub = {
      getMails: (endpoint: string) => of([])
    };

    TestBed.configureTestingModule({
      declarations: [
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
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
