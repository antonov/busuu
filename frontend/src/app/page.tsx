'use client';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Suspense } from "react"
import { Exercises } from "@/components/Exercises"
import Loading from "./loading"

import useCreateModal from "@/hooks/useCreateModal"

export default function Home() {
  const createModal = useCreateModal();    
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 h-14 flex items-center justify-between bg-white dark:bg-zinc-800 px-4">
        <h1 className="text-xl font-semibold">Exercises</h1>
        <Button onClick={createModal.onOpen} className="px-3 py-1.5 rounded-md bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900">
          Open
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-auto">
        <Suspense fallback={<Loading />}>
          <Exercises />
        </Suspense>
      </div>
    </div>
  )
}