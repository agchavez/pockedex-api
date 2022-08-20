import { Module } from '@nestjs/common';
import { SpedService } from './sped.service';
import { SpedController } from './sped.controller';

@Module({
  controllers: [SpedController],
  providers: [SpedService]
})
export class SpedModule {}
