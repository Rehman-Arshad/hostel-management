import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { Topbar } from '../../shared/components/topbar/topbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule, RouterModule, Sidebar, Topbar],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {

}
