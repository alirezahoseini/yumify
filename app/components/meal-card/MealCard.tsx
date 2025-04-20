import React from "react"
import Image from "next/image"
import { Button } from "../ui/button"
import MealCardSkeleton from "./MealCardSkeleton"
import { IMeal } from "@/types/types"

type Props = {
  meal: IMeal
  isLoading: boolean
}

const MealCard = ({ meal, isLoading }: Props) => {
  return (
    isLoading
      ? (
        <MealCardSkeleton />
      )
      : (
        <div className="border rounded-2xl p-4 shadow-md bg-white w-full">
          <div className="flex flex-col lg:flex-row gap-4">
            <Image
              src={meal.strMealThumb}
              width={1024}
              height={1024}
              alt={meal.strMeal}
              className="w-full lg:w-54 lg:h-54 rounded-lg"
            />

            <div className="w-full">
              <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>

              <p className="mb-2"><span className="font-bold">Category: </span>{meal.strCategory}</p>

              <p className="mb-2"><span className="font-bold">Area: </span>{meal.strArea}</p>

              <Button className="px-10 py-5">
                Details
              </Button>

            </div>
          </div>
        </div>
      )
  )
}

export default MealCard