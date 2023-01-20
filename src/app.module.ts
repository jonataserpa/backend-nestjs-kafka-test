import { KafkaConsumerService } from '@infra/messaging/kafka/kafka-consumer.service';
import { MessagingModule } from '@infra/messaging/messaging.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [
    HttpModule,
    MessagingModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [KafkaConsumerService],
})
export class AppModule {}
