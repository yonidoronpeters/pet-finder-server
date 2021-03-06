import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';

describe('SubscriptionController', () => {
  let appController: SubscriptionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionController],
      providers: [SubscriptionService],
    }).compile();

    appController = app.get<SubscriptionController>(SubscriptionController);
  });

  describe('root', () => {
    it('should return empty array of subscriptions', () => {
      expect(appController.getAll()).toEqual([]);
    });
  });
});
