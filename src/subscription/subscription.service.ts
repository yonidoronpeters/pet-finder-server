import { Injectable } from '@nestjs/common';
import { SubscriptionDto } from '../dto/subscription.dto';

@Injectable()
export class SubscriptionService {
  private subscriptions: SubscriptionDto[] = [];

  async getAllSubscriptions(): Promise<SubscriptionDto[]> {
    return this.subscriptions;
  }

  async createSubscription(subscription: SubscriptionDto): Promise<boolean> {
    // TODO update subscription by contact info
    this.subscriptions.push(subscription);
    return true;
  }
}
