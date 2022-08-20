import { Module } from '@nestjs/common';
import { PockemonService } from './pockemon.service';
import { PockemonController } from './pockemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PockemonSchema, Pockemon } from './entities/pockemon.entity';

@Module({
  controllers: [PockemonController],
  providers: [PockemonService],
  imports: [
    MongooseModule.forFeature([
      { name: Pockemon.name, schema: PockemonSchema },
    ]),
  ],
  exports: [
    MongooseModule
  ],
})
export class PockemonModule {}
