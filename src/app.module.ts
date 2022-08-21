import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PockemonModule } from './pockemon/pockemon.module';
import { CommonModule } from './common/common.module';
import { SpedModule } from './sped/sped.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidation } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidation
    }),
    PockemonModule,
    MongooseModule.forRoot(process.env.MONGO_URI,
     {
      useNewUrlParser: true,
    }),
    CommonModule,
    SpedModule,
  ],
})
export class AppModule {}
