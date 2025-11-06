import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { WardenLayout} from './layouts/warden-layout/warden-layout';
import { StudentLayout } from './layouts/student-layout/student-layout';
import { AuthGuard } from './core/auth-guard';
import { RoleGuard } from './core/role-guard';
import { AdminDashboard } from './features/dashboard/admin/admin-dashboard/admin-dashboard';
import { WardenDashboard } from './features/dashboard/admin/warden-dashboard/warden-dashboard';
import { StudentDashboard } from './features/dashboard/admin/student-dashboard/student-dashboard';
import { StudentsList } from './features/students/students-list/students-list';
import { RoomsList } from './features/rooms/rooms-list/rooms-list';
import { FeesList } from './features/fees/fees-list/fees-list';
import { AttendanceList } from './features/attendance/attendance-list/attendance-list';
import { ComplaintsList } from './features/complaints/complaints-list/complaints-list';
import { Landing } from './features/landing/landing';

export const routes: Routes = [
  {path: '', component: Landing},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Admin'] },
    children: [
      { path: '', component: AdminDashboard },
      { path: 'students', component: StudentsList},
      { path: 'rooms', component: RoomsList },
      { path: 'fees', component: FeesList },
      { path: 'attendance', component: AttendanceList },
      { path: 'complaints', component: ComplaintsList }
    ]
  },

  {
    path: 'warden',
    component: WardenLayout,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Warden'] },
    children: [
      { path: '', component: WardenDashboard },
      { path: 'rooms', component: RoomsList },
      { path: 'attendance', component: AttendanceList },
      { path: 'complaints', component: ComplaintsList }
    ]
  },

  {
    path: 'student',
    component: StudentLayout,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Student'] },
    children: [
      { path: '', component: StudentDashboard },
      { path: 'fees', component: FeesList },
      { path: 'attendance', component: AttendanceList },
      { path: 'complaints', component: ComplaintsList }
    ]
  },

  { path: '**', redirectTo: '/login' }
];
