import React from "react"
import Link from "next/link"
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
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div
              className="w-full h-74 lg:h-54 lg:w-84 rounded-lg bg-center bg-cover"
              style={{ backgroundImage: `url(${meal.strMealThumb})` }}
            >
            </div>

            <div className="w-full flex flex-col">
              <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>

              <p className="mb-2"><span className="font-bold">Category: </span>{meal.strCategory}</p>

              <p className="mb-2"><span className="font-bold">Area: </span>{meal.strArea}</p>

              <Link href={`/meal/${meal.idMeal}`}>
                <Button
                  className="px-10 py-5 cursor-pointer w-full mt-2 bg-stone-100 text-stone-900
                hover:bg-stone-950 hover:text-white active:scale-95 transition-all duration-300"
                >
                  Details
                </Button>
              </Link>

            </div>
          </div>
        </div>
      )
  )
}

export default MealCard