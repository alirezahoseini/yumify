import React from "react"
import Image from "next/image"
import { Box, MapPin, Youtube } from "lucide-react"
import Link from "next/link"
import SingleMaelNotFound from "../components/SingleMaelNotFound"
import { getMeal } from "@/lib/services"
import Buttons from "../components/single-meal-components/Buttons"

type Props = {
  params: Promise<{
    id: string
  }>
}

// const data = {
//   "idMeal": "52841",
//   "strMeal": "Creamy Tomato Soup",
//   "strMealAlternate": null,
//   "strCategory": "Starter",
//   "strArea": "British",
//   "strInstructions": "Put the oil, onions, celery, carrots, potatoes and bay leaves in a big casserole dish, or two saucepans. Fry gently until the onions are softened – about 10-15 mins. Fill the kettle and boil it.\r\nStir in the tomato purée, sugar, vinegar, chopped tomatoes and passata, then crumble in the stock cubes. Add 1 litre boiling water and bring to a simmer. Cover and simmer for 15 mins until the potato is tender, then remove the bay leaves. Purée with a stick blender (or ladle into a blender in batches) until very smooth. Season to taste and add a pinch more sugar if it needs it. The soup can now be cooled and chilled for up to 2 days, or frozen for up to 3 months.\r\nTo serve, reheat the soup, stirring in the milk – try not to let it boil. Serve in small bowls with cheesy sausage rolls.",
//   "strMealThumb": "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
//   "strTags": "Baking",
//   "strYoutube": "https://www.youtube.com/watch?v=lBhwjjUiFk4",
//   "strIngredient1": "Olive Oil",
//   "strIngredient2": "Onions",
//   "strIngredient3": "Celery",
//   "strIngredient4": "Carrots",
//   "strIngredient5": "Potatoes",
//   "strIngredient6": "Bay Leaf",
//   "strIngredient7": "Tomato Puree",
//   "strIngredient8": "Sugar",
//   "strIngredient9": "White Vinegar",
//   "strIngredient10": "Chopped Tomatoes",
//   "strIngredient11": "Passata",
//   "strIngredient12": "Vegetable Stock Cube",
//   "strIngredient13": "Whole Milk",
//   "strIngredient14": "",
//   "strIngredient15": "",
//   "strIngredient16": "",
//   "strIngredient17": "",
//   "strIngredient18": "",
//   "strIngredient19": "",
//   "strIngredient20": "",
//   "strMeasure1": "3 tbsp",
//   "strMeasure2": "2 chopped",
//   "strMeasure3": "2 sticks",
//   "strMeasure4": "300g",
//   "strMeasure5": "500g",
//   "strMeasure6": "4",
//   "strMeasure7": "5 tblsp ",
//   "strMeasure8": "2 tblsp ",
//   "strMeasure9": "2 tblsp ",
//   "strMeasure10": "1½ kg",
//   "strMeasure11": "500g",
//   "strMeasure12": "3",
//   "strMeasure13": "400ml",
//   "strMeasure14": "",
//   "strMeasure15": "",
//   "strMeasure16": "",
//   "strMeasure17": "",
//   "strMeasure18": "",
//   "strMeasure19": "",
//   "strMeasure20": "",
//   "strSource": "https://www.bbcgoodfood.com/recipes/2604646/creamy-tomato-soup",
//   "strImageSource": null,
//   "strCreativeCommonsConfirmed": null,
//   "dateModified": null
// }

const page = async ({ params }: Props) => {
  const resolvedParams = await params
  const { id } = resolvedParams
  const data = await getMeal(id)

  const ingredients = Object.keys(data).filter(key => key.startsWith("strIngredient") && data[key] !== "")
  const measures = Object.keys(data).filter(key => key.startsWith("strMeasure") && data[key] !== "")


  return (
    data === null || data === undefined || !data || data === "I"
      ? (
        <SingleMaelNotFound status={data} />
      )
      : (
        <div className="px-4 lg:px-0 my-5">
          <div
            className="border rounded-2xl p-4 shadow-md bg-white w-full flex 
            flex-col items-center justify-start gap-4"
          >
            <Image 
              width={800}
              height={800}
              src={data.strMealThumb}
              alt=""
              className="rounded-2xl w-full "
            />

            <h1 className="text-2xl font-bold">{data.strMeal}</h1>

            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <Box />

                <p>{data.strCategory}</p>
              </div>

              <div className="flex items-center justify-center gap-2">
                <MapPin />

                <p>{data.strArea}</p>
              </div>
            </div>

            <p className="text-base text-gray-600">{data.strInstructions}</p>

            <Link
              className="w-full bg-red-500 text-white hover:bg-red-600 rounded-md p-2 
              text-center font-black flex items-center justify-center gap-2" 
              href={data.strYoutube}
              target="_blank"
            >
              <Youtube />
              Watch on Youtube
            </Link> 

            <div className="w-full flex items-center justify-center gap-2 flex-col">
              <h2 className="text-lg font-bold mt-2">Ingredients</h2>

              <div className="flex flex-col gap-2 w-full">
                {
                  ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center">
                      <p>
                        <strong>
                          {data[ingredient]} 
                        </strong>

                        :  

                        {` ${data[measures[index]]}`}
                      </p>
                    </div>
                  ))  
                }
              </div>
              
            </div>
          </div>

          <Buttons />
        </div>
      )
  )
}

export default page