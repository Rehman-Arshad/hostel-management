import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [CommonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar implements OnInit{
  user: any;
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.user = this.auth.getUser();
  }
  logout(){ this.auth.logout(); }
}
