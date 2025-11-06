import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topbar } from '../../shared/components/topbar/topbar';
import { Footer } from '../../shared/components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-layout',
  imports: [CommonModule, Topbar, Footer, RouterModule],
  templateUrl: './student-layout.html',
  styleUrls: ['./student-layout.scss'],
})
export class StudentLayout  {

}
