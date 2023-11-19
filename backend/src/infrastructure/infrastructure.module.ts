import { Module } from '@nestjs/common';
import { HttpServerModule } from './http_server/http_server.module';

@Module({
  imports: [HttpServerModule]
})
export class InfrastructureModule {}
