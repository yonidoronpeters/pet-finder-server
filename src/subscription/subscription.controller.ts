import { Controller, Get } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ContactDto } from '../dto/contact.dto';
import { SubscriptionDto } from '../dto/subscription.dto';

@ApiTags('subscriptions')
@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  @ApiOperation({
    summary: 'Get a subscription',
  })
  @ApiResponse({
    type: SubscriptionDto,
    status: 200,
  })
  getHello(): string {
    return this.subscriptionService.getHello();
  }
}
