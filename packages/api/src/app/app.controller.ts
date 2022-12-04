import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  create(
    @Body()
    { user_name, contact_phone }: { user_name: string; contact_phone: string }
  ) {
    return this.appService.add(user_name, contact_phone);
  }

  @Post()
  setPassword(
    @Body()
    { id, password }: { id: string; password: string }
  ) {
    return this.appService.add(id, password);
  }
}
