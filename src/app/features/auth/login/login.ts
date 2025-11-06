import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login implements OnInit {
  form!: any;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void { 
    this.form = this.fb.group({
      email: ['admin@hostel.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(){
    if (this.form.invalid) return;
    const { email, password } = this.form.value;
    this.auth.login(email!, password!).subscribe(res => {
      if (!res) { alert('Invalid credentials'); return; }
      // redirect according to role
      const role = res.user.role.toLowerCase();
      this.router.navigate([`/${role}`]);
    });
  }
}
