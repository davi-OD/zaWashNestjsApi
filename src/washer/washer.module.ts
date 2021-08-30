import { Module } from '@nestjs/common';
import { WasherController } from './washer.controller';
import { WasherService } from './washer.service';

@Module({
  controllers: [WasherController],
  providers: [WasherService]
})
export class WasherModule {}
