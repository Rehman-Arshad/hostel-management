import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../../shared/services/mock-data';

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.scss',
})
export class RoomsList implements OnInit {
  rooms: any[] = [];
  constructor(private mock: MockDataService) {}
  ngOnInit(): void { this.mock.getRooms().subscribe(r => this.rooms = r); }
}