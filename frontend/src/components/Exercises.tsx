'use client'
import { Suspense, useEffect, useState } from "react";
import { Exercise } from "@/core/types";
import ExerciseCard from "./ExerciseCard";
import LoadingExercises from "./LoadingExercises";

export async function Exercises() {
    
    async function fetchExercises() {
        const res = await fetch('http://localhost:3000/exercise',  { next: { revalidate: 5 } });
        const exercises: Exercise[] = await res.json();
        
        return exercises;
    }

    const exercises = await fetchExercises();
    if (!exercises) {
        null;
    }
    return (
     <>
    
        {exercises.map(exercise  => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
       
        </>
    )
}