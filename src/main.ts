import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ReflectionService } from '@grpc/reflection';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const grpcOptions: MicroserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, './modules/hero/hero.proto'),
      url: 'localhost:50051',
    },
  };
  // await app.listen();
  app.connectMicroservice<MicroserviceOptions>(grpcOptions);

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
