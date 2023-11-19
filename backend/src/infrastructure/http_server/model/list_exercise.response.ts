import { ApiProperty, ApiExtraModels, getSchemaPath } from '@nestjs/swagger';
import { Exercise } from 'src/core/domain/entities/Exercise';

@ApiExtraModels(Exercise) // Registers the Exercise model for Swagger documentation
export class ListExerciseResponse extends Array<Exercise> {

    @ApiProperty({
        type: 'array',
        items: { $ref: getSchemaPath(Exercise) } // References the Exercise model for items in the array
    })
    public static arrayType: Exercise[]; // Static property to help Swagger understand the array type
}