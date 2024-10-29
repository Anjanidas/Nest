import { GrpcOptions, Transport } from '@nestjs/microservices';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
import { join } from 'path';

export const grpcClientOptions: GrpcOptions = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(__dirname, './modules/hero/hero.proto'),
    url: 'localhost:50051',
    loader: {
      oneofs: true,
      keepCase: true,
    },
  },
});
