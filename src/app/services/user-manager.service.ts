import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable()
export class UserManagerService {

  readonly baseUrl = environment.apiUrl + 'users/emails/';

  constructor(private http: HttpClient) { }

  userEmailExists(email: string): Observable<boolean> {
    if (email.trim() === '') {
      return of(false);
    } else {
      const encodedEmail = encodeURIComponent(email);

      return this.http.head(this.baseUrl + encodedEmail).pipe(
        map(() => true),
        catchError(() => of(false))
      )
    }
  }

}
