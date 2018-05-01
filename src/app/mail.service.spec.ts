import { TestBed, inject } from '@angular/core/testing';

import { MailService } from './mail.service';
import { HttpClientModule } from '@angular/common/http';

describe('MailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MailService]
    });
  });

  it('should be created', inject([MailService], (service: MailService) => {
    expect(service).toBeTruthy();
  }));
});
