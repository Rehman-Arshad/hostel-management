export interface Student {
  id: number;
  name: string;
  email: string;
  roomId?: number;
  phone?: string;
  feesDue?: number;
  attendancePercent?: number;
}
