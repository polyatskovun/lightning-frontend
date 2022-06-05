import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<User> {

  constructor(private http: HttpClient) {
    super("/users", http);
  }

  login(model: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/login', model);
  }
}

