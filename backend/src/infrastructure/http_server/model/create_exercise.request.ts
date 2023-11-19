import { ApiProperty } from '@nestjs/swagger';

export class CreateProductRequest {
  @ApiProperty({
    description: 'Exercise content',
    type: String,
    required: true,
  })
  content: string;

  @ApiProperty({
    description: 'User UUID',
    type: Number,
    required: true,
  })
  user_id: string;

  @ApiProperty({
    description: 'User name',
    required: false,
  })
  user_name: string;
}
