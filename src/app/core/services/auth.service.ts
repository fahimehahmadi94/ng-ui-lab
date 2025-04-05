import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/users`;


  login(email: string, password: string): Observable<boolean> {
    const url = `${this.api}?email=${email}&password=${password}`;
    return this.http.get<User[]>(url).pipe(
      map(users => users.length > 0 )
    )
  }

}
