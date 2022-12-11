import { Injectable } from '@nestjs/common';
import { User } from '@janettra-workspace/shared-types';

@Injectable()
export class AppService {
  private users: User[] = [];

  getData(): User[] {
    return this.users;
  }

  async getById(id: string) {
    return this.users.find((user) => user.user_id === id);
  }

  async add(user_name: string, contact_phone: string): Promise<User> {
    const user = {
      user_id: this.users.length.toString(),
      user_name,
      contact_phone,
      address: '',
      city_id: 0,
      confirmation_code: '',
      email: '',
      password: '',
      time_joined: '',
      active: true,
    };
    this.users.push(user);

    return user;
  }

  async edit(id: string, data: User): Promise<User> {
    this.users = this.users.map((user) =>
      user.user_id === id ? { ...user, ...data } : user
    );

    return data;
  }

  async destroy(id: string): Promise<string> {
    this.users = this.users.map((user) =>
      user.user_id === id ? { ...user, active: false } : user
    );
    return id;
  }

  setPaassword(id: string, password: string): void {
    this.users = this.users.map((user) => ({
      ...user,
      password: id === user.user_id ? password : user.password,
    }));
  }
}
