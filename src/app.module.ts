import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppService2 } from './otro';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppService2],
})
export class AppModule {}
