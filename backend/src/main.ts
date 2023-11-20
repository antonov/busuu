import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateSwaggerDocs } from './infrastructure/http_server/util/generate_swagger_docs';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  generateSwaggerDocs(app);
  await app.listen(3000);

}
bootstrap();