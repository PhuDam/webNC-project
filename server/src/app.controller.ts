import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('data')
  getData() {
    return [
      {name: 'Dam Gia Phu', id: 23010760, status: 'active',},
      {name: 'Gia Phu', id: 123456, status: 'active',},
    ]
    };
  }