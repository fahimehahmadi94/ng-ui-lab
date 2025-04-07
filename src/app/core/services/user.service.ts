import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser = signal<User | null>(null);

  setUser(user: User) {
    this.currentUser.set(user);
  }

  getUser() {
    return this.currentUser();
  }
  clear() {
    this.currentUser.set(null);
  }
  isLoggedIn() {
    return !!this.currentUser();
  }
}
