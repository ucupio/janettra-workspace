import { Injectable } from '@nestjs/common';

interface User {
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

@Injectable()
export class AppService {
  private users: User[] = [];
  getData(): User[] {
    return this.users;
  }

  add(user_name: string, contact_phone: string): void {
    this.users.push({
      user_id: this.users.length.toString(),
      user_name,
      contact_phone,
      address: '',
      city_id: 0,
      confirmation_code: '',
      email: '',
      password: '',
      time_joined: '',
    });
  }

  setPaassword(id: string, password: string): void {
    this.users = this.users.map((user) => ({
      ...user,
      password: id === user.user_id ? password : user.password,
    }));
  }
}
