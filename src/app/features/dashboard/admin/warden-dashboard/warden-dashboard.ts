import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../../../shared/services/mock-data';

@Component({
  selector: 'app-warden-dashboard',
  imports: [CommonModule],
  templateUrl: './warden-dashboard.html',
  styleUrl: './warden-dashboard.scss',
})
export class WardenDashboard implements OnInit {
  rooms: any[] = [];
  constructor(private mock: MockDataService) {}
  ngOnInit(): void {
    this.mock.getRooms().subscribe(r => this.rooms = r);
  }
}
