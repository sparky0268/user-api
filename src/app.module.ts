import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      '<place you moggoDb connection string here>',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
