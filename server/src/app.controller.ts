import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('data') 
  getData() {

    const mockData = [];
    for (let i = 1; i <= 25; i++) {
      mockData.push({
        id: i,
        name: `User ${i} Doe`,
        status: i % 2 === 0 ? "Inactive" : "Active"
      });
    }
    return mockData;
  }
}