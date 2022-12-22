export interface User {
  user_id: string;
  user_name: string;
  city_id: number;
  address: string;
  contact_phone: string;
  email: string;
  confirmation_code: string;
  password: string;
  time_joined: string;
}

export interface PayloadProps {
  type: string;
  payload: unknown;
}
