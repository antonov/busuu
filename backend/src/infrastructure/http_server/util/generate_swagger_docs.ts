import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function generateSwaggerDocs(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Busuu Exercise APP')
    .setDescription('Project based on hexagonal architecture')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
}
