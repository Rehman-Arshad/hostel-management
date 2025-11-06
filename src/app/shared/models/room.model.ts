export interface Room {
  id: number;
  number: string;
  capacity: number;
  occupied: number;
  status: 'Available' | 'Full' | 'Reserved' | string;
}
