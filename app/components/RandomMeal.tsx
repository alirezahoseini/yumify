"use client"
import MealCard from "./meal-card/MealCard"
import { Button } from "@/app/components/ui/button"
import { useRandomMeal } from "@/hooks/useMeal"

const RandomMeal = () => {
  const {
    meal,
    isFetching,
    isError,
    fetchMeal
  } = useRandomMeal({ enabled: false })


  const handleFetchMeal = () => {
    fetchMeal()
  }

  return (
    <div className="p-4 flex flex-col items-center gap-5 mx-auto">
      <Button 
        onClick={handleFetchMeal} 
        disabled={isFetching}
        size="lg"
        className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer
        active:scale-[0.95]"
      >
        {isFetching ? "Loading..." : "Surprise Me"}
      </Button>


      {
        isError && (
          <div className="text-red-500 mb-4">
            Loading failed!
          </div>
        )
      }

      {
        meal && (
          <MealCard isLoading={isFetching} meal={meal} />
        )
      }
    </div>
  )
}

export default RandomMeal 