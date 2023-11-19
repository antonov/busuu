import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post, UseFilters } from "@nestjs/common";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ExerciseApplication } from "../../../core/application/ExerciseApplication";
import { EXERCISE_APPLICATION } from "../../../core/core.module";
import { Log } from "../../shared/Log";
import { ExerciseCreatorFilter } from "../exception_filters/exercise_exception.filter";
import { AppResponse } from "../model/app.response";
import { CreateExerciseRequest } from "../model/create_exercise.request";
import { ListExerciseResponse } from "../model/list_exercise.response";


@ApiTags('Exercises')
@Controller('/exercise')
@UseFilters(ExerciseCreatorFilter)
export class ExerciseController {

    constructor(@Inject(EXERCISE_APPLICATION) private application: ExerciseApplication) {}

    @ApiBadRequestResponse({ description: 'Invalid user id'})
    @ApiInternalServerErrorResponse({ description: 'Server error'})
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: AppResponse })
    @HttpCode(201)
    @Post()
    async createExercise(@Body() request: CreateExerciseRequest): Promise<AppResponse> {
        
        Log.info(`(POST) Create exercise`, request)
        const exerciseId = await this.application.create(request) 
        
        return {
            status: 201,
            message: `Exercise(id=${exerciseId}) created OK`
        }

    }


    @ApiInternalServerErrorResponse({ description: 'Server error'})
    @HttpCode(200)
    @Get()
    async findAll(): Promise<ListExerciseResponse> {
        Log.info('(GET) Get exercises')
        const exercises = await this.application.findAll();
        return exercises;
    }

    
}