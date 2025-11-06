import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from "./shared/components/sidebar/sidebar";
import { Topbar } from "./shared/components/topbar/topbar";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Sidebar, Topbar],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
