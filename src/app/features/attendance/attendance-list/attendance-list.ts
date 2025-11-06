import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../../shared/services/mock-data';

@Component({
  selector: 'app-attendance-list',
  imports: [CommonModule],
  templateUrl: './attendance-list.html',
  styleUrl: './attendance-list.scss',
})
export class AttendanceList implements OnInit {
  students: any[] = [];
  constructor(private mock: MockDataService) {}
  ngOnInit(): void { this.mock.getStudents().subscribe(s => this.students = s); }
}
