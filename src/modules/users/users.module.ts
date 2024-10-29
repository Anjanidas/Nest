import { Global, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CatsModule } from '../cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user.schema';
import { GameSchema } from 'src/schema/game.schema';

@Global()
@Module({
  imports: [
    CatsModule,
    MongooseModule.forFeature([{ name: 'User', schema: GameSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
