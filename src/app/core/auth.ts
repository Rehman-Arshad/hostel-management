import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  // mock users
  private users: User[] = [
    { id: 1, email: 'admin@hostel.com', password: '123456', role: 'Admin', name: 'Admin User' },
    { id: 2, email: 'warden@hostel.com', password: '123456', role: 'Warden', name: 'Warden User' },
    { id: 3, email: 'student@hostel.com', password: '123456', role: 'Student', name: 'Student User' }
  ];

  constructor(private router: Router) {}

  login(email: string, password: string): Observable<{ token: string, user: User } | null> {
    const found = this.users.find(u => u.email === email && u.password === password);
    if (!found) return of(null);

    // create fake JWT token and store in localStorage
    const fakeToken = btoa(`${found.email}:${new Date().toISOString()}`);
    localStorage.setItem('token', fakeToken);
    localStorage.setItem('user', JSON.stringify(found));
    this.currentUserSubject.next(found);
    return of({ token: fakeToken, user: found });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): User | null {
    return this.currentUserSubject.value;
  }

  private getUserFromStorage(): User | null {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  }
}
