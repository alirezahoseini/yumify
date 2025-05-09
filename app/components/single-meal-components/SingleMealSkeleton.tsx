import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const pSkeletonArray = [1, 2, 3, 4, 5]

const SingleMealSkeleton = () => {
  return (
    <div className="px-4 lg:px-0 mt-5 mb-14 mx-auto max-w-xl">
      <div
        className="border rounded-2xl p-4 shadow-md bg-white w-full flex 
        flex-col items-center justify-start gap-4"
      >
        <Skeleton 
          className="rounded-2xl w-full h-96"
        />

        <Skeleton className="w-76 h-6"></Skeleton>

        <div className="flex items-center justify-center gap-3">
          <Skeleton className="w-32 h-6" /> 

          <Skeleton className="w-32 h-6" /> 
        </div>

        {pSkeletonArray.map(item => <Skeleton key={item} className="w-full h-5" />)}

      </div>
    </div>
  )
}

export default SingleMealSkeleton