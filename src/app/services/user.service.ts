import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<User[]> {
    return of([
      { id: 1, name: 'John Doe', energyUsage: 150, lastUpdated: new Date() },
      { id: 2, name: 'Jane Smith', energyUsage: 200, lastUpdated: new Date() },
    ]);
  }
}
