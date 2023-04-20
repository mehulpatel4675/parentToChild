// Moduel or interface
export interface User {
  name: string;
  phone: number | null;
  address?: Address[];
}

interface Address {
  city: string;
  state: string;
  pincode: number;
}
