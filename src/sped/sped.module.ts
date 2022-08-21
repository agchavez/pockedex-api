import { Module } from '@nestjs/common';
import { SpedService } from './sped.service';
import { SpedController } from './sped.controller';
import { PockemonModule } from '../pockemon/pockemon.module';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [SpedController],
  providers: [SpedService],
  imports: [PockemonModule, CommonModule],
})
export class SpedModule {}
