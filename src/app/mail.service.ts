import { Injectable } from '@angular/core';
import { Mail } from './mail';
import { MAILS } from './mock-mails';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }

  getMails(endpoint: string): Observable<any[]> {
    if (endpoint === 'local') {
      return of(MAILS);
    } else {
      return this.http.get<Mail[]>(endpoint);
    }
  }
}
