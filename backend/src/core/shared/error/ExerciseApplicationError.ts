export class ExerciseApplicationError extends Error {
  __proto__ = Error;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, ExerciseApplicationError.prototype);
  }
}
