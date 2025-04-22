import React from "react"
import { IMeal } from "@/types/types"

type Props = {
  data: IMeal
}

const Ingredients = ({ data }: Props) => {
  const ingredients = Object.keys(data).filter(key => key.startsWith("strIngredient") && data[key] !== "")
  const measures = Object.keys(data).filter(key => key.startsWith("strMeasure") && data[key] !== "")

  return (
    <div className="w-full flex items-center justify-center gap-2 flex-col">
      <h2 className="text-lg font-bold mt-2">Ingredients</h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full
     items-center justify-center"
      >
        {
          ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center justify-center">
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
  )
}

export default Ingredients