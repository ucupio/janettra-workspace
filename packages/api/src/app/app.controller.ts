import { User } from '@janettra-workspace/shared-types';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  setPassword(
    @Body()
    { id, password }: { id: string; password: string }
  ) {
    return this.appService.add(id, password);
  }

  @Get()
  async index(): Promise<User[]> {
    return this.appService.getData();
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<User> {
    return this.appService.getById(id);
  }

  @Post()
  async create(
    @Body()
    { user_name, contact_phone }: { user_name: string; contact_phone: string }
  ): Promise<User> {
    return this.appService.add(user_name, contact_phone);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: User): Promise<User> {
    return this.appService.edit(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<string> {
    return this.appService.destroy(id);
  }
}
