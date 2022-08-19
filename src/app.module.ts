import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PockemonModule } from './pockemon/pockemon.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    PockemonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/pockemon', {
      useNewUrlParser: true,
    }),
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
