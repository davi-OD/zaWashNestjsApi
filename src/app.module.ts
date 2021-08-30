import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WasherModule } from './washer/washer.module';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { ExpenseModule } from './expense/expense.module';

@Module({
  imports: [WasherModule, UserModule, CarModule, ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
