import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUri = environment.uri;
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get(`${this.apiUri}/users`);
  }

  getUser(id: number) {
    return this.http.get<User>(`${this.apiUri}/users/${id}`);
  }

  createUser(user: User) {
    return this.http.post<User>(`${this.apiUri}/users`, user);
  }

  updateUser(user: User) {
    return this.http.patch(`${this.apiUri}/users/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete<User>(`${this.apiUri}/users/${id}`);
  }
}
// Curso de JSON-SERVER:
// https://www.youtube.com/playlist?list=PLC3y8-rFHvwhc9YZIdqNL5sWeTCGxF4ya
