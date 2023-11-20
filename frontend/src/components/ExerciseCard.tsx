import { Exercise } from "@/core/types"

interface ExerciseProps {
    exercise: Exercise
}
const ExerciseCard: React.FC<ExerciseProps> = ({ exercise })  => {
    return (
        <div className="border rounded-md p-4 max-h-[500px] overflow-auto" suppressHydrationWarning>
            <h2 className="text-lg font-bold">{exercise.user.name}</h2>
            <time className="text-gray-500 dark:text-gray-400" suppressHydrationWarning>{new Date(exercise.created_at).toLocaleString()}</time>
            <p className="mt-2">{exercise.content}</p>
        </div>
    )
}
export default ExerciseCard;
