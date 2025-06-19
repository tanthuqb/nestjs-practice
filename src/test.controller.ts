import { Controller, Get } from '@nestjs/common';

@Controller()
export class TestController {
  @Get('/products')
  getTest(): string {
    return 'This is a test endpoint for products';
  }
}
