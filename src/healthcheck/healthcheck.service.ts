import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthcheckService {
  async getStatus(): Promise<string> {
    return 'working';
  }
}
