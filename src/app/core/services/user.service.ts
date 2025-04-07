import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser = signal<User | null>(this.load());

  private load() {
    const user = localStorage.getItem('USER_KEY');
    return user ? JSON.parse(user) : null
  }

  setUser(user: User) {
    const safeUser = { id: user.id, email: user.email };
    this.currentUser.set(safeUser as User);
    localStorage.setItem('USER_KEY', JSON.stringify(safeUser))
  }

  getUser() {
    return this.currentUser();
  }

  clear() {
    localStorage.removeItem('USER_KEY');
    this.currentUser.set(null);
  }

  isLoggedIn(): boolean {
    return !!this.currentUser();
  }
}
