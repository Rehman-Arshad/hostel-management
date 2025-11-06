export interface User {
  id: number;
  email: string;
  password?: string;
  role: 'Admin' | 'Warden' | 'Student' | string;
  name?: string;
}
