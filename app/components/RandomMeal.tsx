"use client"
import useMeal from "@/hooks/useMeal"
import { Button } from "@/app/components/ui/button"

const RandomMeal = () => {
  const {
    meal,
    isFetching,
    isError,
    fetchMeal
  } = useMeal(false)


  const handleFetchMeal = () => {
    fetchMeal()
  }

  return (
    <div className="p-4 flex flex-col items-center gap-5">
      <Button 
        onClick={handleFetchMeal} 
        disabled={isFetching}
        size="lg"
        className="bg-blue-500 hover:bg-blue-600 text-white "
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
          <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>

            <div className="flex flex-col md:flex-row gap-4">
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal} 
                className="rounded-lg w-full md:w-1/3"
              />

              <div>
                <p className="mb-2"><span className="font-bold">دسته: </span>{meal.strCategory}</p>

                <p className="mb-2"><span className="font-bold">منطقه: </span>{meal.strArea}</p>

                <h3 className="text-xl font-bold mt-4">دستورالعمل‌ها:</h3>

                <p className="mt-2">{meal.strInstructions}</p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default RandomMeal 