import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../../shared/services/mock-data';

@Component({
  selector: 'app-fees-list',
  imports: [CommonModule],
  templateUrl: './fees-list.html',
  styleUrl: './fees-list.scss',
})
export class FeesList implements OnInit {
  students: any[] = [];
  constructor(private mock: MockDataService) {}
  ngOnInit(): void { this.mock.getStudents().subscribe(s => this.students = s); }
}