import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUri = environment.uri;
}
