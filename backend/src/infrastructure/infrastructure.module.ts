import { Module } from '@nestjs/common';
import { HttpServerModule } from './http_server/http_server.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [HttpServerModule, SharedModule]
})
export class InfrastructureModule {}
