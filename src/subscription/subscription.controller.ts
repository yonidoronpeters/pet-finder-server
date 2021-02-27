import { Body, Controller, Get, Post } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  getAll(): Promise<SubscriptionDto[]> {
    return this.subscriptionService.getAllSubscriptions();
  }

  @Post()
  @ApiOperation({
    summary: 'Create a subscription',
  })
  @ApiResponse({
    type: SubscriptionDto,
    status: 201,
  })
  async createSubscription(@Body() subscription: SubscriptionDto): Promise<SubscriptionDto> {
    await this.subscriptionService.createSubscription(subscription);
    return subscription;
  }
}
