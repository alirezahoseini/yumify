"use client"
import Image from "next/image"
import React from "react"
import Link from "next/link"
import { Youtube } from "lucide-react"
import Badges from "./Badges"
import Ingredients from "./Ingredients"
import Buttons from "./Buttons"
import useMeal from "@/hooks/useMeal"

const MainWrapper = ({ mealId }: { mealId: string }) => {
  const {
    isLoading,
    isError,
    meal 
  } = useMeal({ enabled: true, id: mealId })


  return (
    <div className="px-4 lg:px-0 mt-5 mb-14 mx-auto max-w-xl">
      {isError && <h1>error</h1>}

      {
        isLoading
          ? <h1>loading...</h1>
          : (
            meal && (
              <div className="px-4 lg:px-0 mt-5 mb-14 mx-auto max-w-xl">
                <div
                  className="border rounded-2xl p-4 shadow-md bg-white w-full flex 
                  flex-col items-center justify-start gap-4"
                >
                  <Image 
                    width={800}
                    height={800}
                    src={meal.strMealThumb}
                    alt=""
                    className="rounded-2xl w-full"
                    unoptimized
                  />

                  <h1 className="text-2xl font-bold">{meal.strMeal}</h1>

                  <Badges data={meal} />

                  <p className="text-base text-gray-600">{meal.strInstructions}</p>

                  {
                    meal.strYoutube && (
                      <Link
                        className="w-full bg-red-500 text-white hover:bg-red-600 rounded-md p-2 
                        text-center font-black flex items-center justify-center gap-2 my-5" 
                        href={meal.strYoutube}
                        target="_blank"
                      >
                        <Youtube />
                        Watch on Youtube
                      </Link>
                    ) 
                  }

                  <Ingredients data={meal} />

                </div>

                <Buttons meal={meal} />
              </div>
            )
          )

      }
    </div>
  )
}

export default MainWrapper