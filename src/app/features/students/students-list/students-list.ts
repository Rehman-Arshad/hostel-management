import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../../shared/services/mock-data';

@Component({
  selector: 'app-students-list',
  imports: [CommonModule],
  templateUrl: './students-list.html',
  styleUrl: './students-list.scss',
})
export class StudentsList implements OnInit {
  students: any[] = [];
  constructor(private mock: MockDataService) {}
  ngOnInit(): void {
    this.load();
  }
  load(){ this.mock.getStudents().subscribe(s => this.students = s); }
  addMock(){
    const newS = { name: 'New Student', email: `new${Date.now()}@uni.edu`, roomId: null, feesDue: 0 } as any;
    this.mock.addStudent(newS).subscribe(() => this.load());
  }
}
