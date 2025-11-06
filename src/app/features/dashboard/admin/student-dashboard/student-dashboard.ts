import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/auth';
import { MockDataService } from '../../../../shared/services/mock-data';

@Component({
  selector: 'app-student-dashboard',
  imports: [CommonModule],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.scss',
})
export class StudentDashboard implements OnInit {
  user: any;
  student: any;
  constructor(private auth: AuthService, private mock: MockDataService) {}
  ngOnInit(): void {
    // simple lookup by email
    this.user = this.auth.getUser();
    if (!this.user) return;
    this.mock.getStudents().subscribe(list => {
      this.student = list.find(s => s.email === this.user!.email) || { roomId: 'N/A', feesDue: 0, attendancePercent: 0 };
    });
  }
}
