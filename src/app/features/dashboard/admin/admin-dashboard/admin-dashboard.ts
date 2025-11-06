import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../../../shared/services/mock-data';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard implements OnInit {
  totalStudents = 0;
  totalRooms = 0;
  availableRooms = 0;
  pendingComplaints = 0;
  students: any[] = [];

  constructor(private mock: MockDataService) {}

  ngOnInit(): void {
    this.mock.getStudents().subscribe(s => {
      this.students = s;
      this.totalStudents = s.length;
    });
    this.mock.getRooms().subscribe(r => {
      this.totalRooms = r.length;
      this.availableRooms = r.filter(x => x.status === 'Available').length;
    });
    // pending complaints mocked as demo number
    this.pendingComplaints = 2;
  }
}
