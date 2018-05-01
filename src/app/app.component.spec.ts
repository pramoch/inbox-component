import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { MailService } from './mail.service';
import { of } from 'rxjs/observable/of';

describe('AppComponent', () => {
  let mailServiceStub: Partial<MailService>;

  beforeEach(async(() => {
    // stub MailService for test purposes
    mailServiceStub = {
      getMails: (endpoint: string) => of([])
    };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InboxComponent,
        ListComponent,
        ListItemComponent
      ],
      providers: [
        { provide: MailService, useValue: mailServiceStub }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
