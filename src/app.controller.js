import { Controller, Dependencies, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

// https://docs.nestjs.com/techniques/database
@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }
  
  getHelloData() {
    return { message: this.appService.getHello() };
  }

  @Get('/api')
  getHello() {
    return this.getHelloData();
  }

  @Get()
  @Render('index')
  root() {
    return this.getHelloData();
  }
}
