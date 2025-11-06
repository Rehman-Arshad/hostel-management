import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Room } from '../models/room.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private students: Student[] = [
    { id: 1, name: 'Ali Khan', email: 'ali@uni.edu', roomId: 101, phone: '0300-1111111', feesDue: 500, attendancePercent: 92 },
    { id: 2, name: 'Ayesha Malik', email: 'ayesha@uni.edu', roomId: 102, phone: '0300-2222222', feesDue: 0, attendancePercent: 98 },
    { id: 3, name: 'Bilal Ahmed', email: 'bilal@uni.edu', roomId: 103, phone: '0300-3333333', feesDue: 250, attendancePercent: 85 }
  ];

  private rooms: Room[] = [
    { id: 101, number: 'A-101', capacity: 2, occupied: 1, status: 'Available' },
    { id: 102, number: 'A-102', capacity: 2, occupied: 2, status: 'Full' },
    { id: 103, number: 'B-201', capacity: 3, occupied: 2, status: 'Available' }
  ];

  constructor() {}

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  getStudent(id: number): Observable<Student | undefined> {
    return of(this.students.find(s => s.id === id));
  }

  addStudent(s: Student): Observable<Student> {
    s.id = Math.max(...this.students.map(x => x.id), 0) + 1;
    this.students.push(s);
    return of(s);
  }

  updateStudent(s: Student): Observable<Student> {
    const idx = this.students.findIndex(x => x.id === s.id);
    if (idx >= 0) this.students[idx] = s;
    return of(s);
  }

  getRooms(): Observable<Room[]> {
    return of(this.rooms);
  }

  getRoom(id: number): Observable<Room | undefined> {
    return of(this.rooms.find(r => r.id === id));
  }

  updateRoom(r: Room): Observable<Room> {
    const idx = this.rooms.findIndex(x => x.id === r.id);
    if (idx >= 0) this.rooms[idx] = r;
    return of(r);
  }
}
