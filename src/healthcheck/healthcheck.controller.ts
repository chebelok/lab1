import { Controller, Get } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { Endpoints } from '../enums/endpoints.enum';

@Controller(Endpoints.HEALTHCHECK)
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}
  @Get()
  getStatus(): Promise<string> {
    return this.healthcheckService.getStatus();
  }
}
