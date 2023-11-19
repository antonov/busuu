import { ApiProperty } from '@nestjs/swagger';

export class CreateExerciseRequest {
  @ApiProperty({
    description: 'Exercise content',
    type: String,
    required: true,
  })
  content: string;

  @ApiProperty({
    description: 'User UUID',
    type: String,
    required: true,
  })
  user_id: string;
}
