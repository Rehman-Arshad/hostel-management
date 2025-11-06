import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { Topbar } from '../../shared/components/topbar/topbar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-warden-layout',
  imports: [CommonModule, Sidebar, Topbar, RouterModule],
  templateUrl: './warden-layout.html',
  styleUrl: './warden-layout.scss',
})
export class WardenLayout {

}
