import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const MealCardSkeleton = () => {
  return (
    <div className="border rounded-2xl p-4 shadow-md bg-white w-full">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <Skeleton className="w-full h-74 lg:h-54 lg:w-84" />

        <div className="w-full flex gap-6 flex-col">
          <Skeleton className="w-92 h-4 mb-4" />

          <Skeleton className="w-38 h-3" />

          <Skeleton className="w-38 h-3" />

          <Skeleton className="w-full h-11 " />

        </div>
      </div>
    </div>
  )
}

export default MealCardSkeleton