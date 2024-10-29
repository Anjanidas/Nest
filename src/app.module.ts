import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CatsModule } from './modules/cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserSchema } from './schema/user.schema';
import { NotificationModule } from './modules/notification/notification.module';
import { ConfigModule } from '@nestjs/config';
import { HeroModule } from './modules/hero/hero.module';
import { grpcClientOptions } from './grpc.client.options';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import {  GameSchema } from './schema/game.schema';
import { TranslationModule } from './modules/translation/translation.module';
import { TranslationSchema } from './modules/translation/schema/translation.schema';

@Module({
  imports: [
    GrpcReflectionModule.register(grpcClientOptions),
    UsersModule,
    CatsModule,
    TranslationModule,
    NotificationModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    MongooseModule.forFeature([{ name: 'User', schema: GameSchema }]),
    MongooseModule.forFeature([
      {
        name: 'Translation',
        schema: TranslationSchema,
      },
    ]),
    ConfigModule.forRoot(),
    HeroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
