import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SubscriptionModule } from './subscription/subscription.module';
import { LoggerMiddleware } from './log/logger.middleware';

@Module({
  imports: [SubscriptionModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
