import Image from "next/image"
import React from "react"
import { Trash2 } from "lucide-react"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { Button } from "../ui/button"
import { IMeal } from "@/types/types"
import { removeFavorite } from "@/store/favoritesSlice"

type Props = {
  meal: IMeal
  setIsOpen: (isOpen: boolean) => void
}

const SheetMealCard = ({ meal, setIsOpen }: Props) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeFavorite({ idMeal: meal.idMeal }))
    setIsOpen(false)
  }

  return (
    <div className="flex items-start gap-4 p-3">
      <Link 
        href={`/meal/${meal.idMeal}`}
        onClick={() => setIsOpen(false)}
      >
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={100}
          height={100}
          className="rounded-md"
          unoptimized
        />
      </Link>

      <div className="flex flex-col gap-2">
        <Link 
          href={`/meal/${meal.idMeal}`}
          onClick={() => setIsOpen(false)}
        >
          <h3 className="text-lg font-bold">{meal.strMeal}</h3>
        </Link>

        <p className="text-sm flex gap-2">
          <span className="font-medium text-gray-600">Category:</span>

          {meal.strCategory}
        </p>

        <Button 
          variant="outline" 
          size="icon" 
          className="cursor-pointer active:scale-95"
          onClick={handleDelete}
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  )
}

export default React.memo(SheetMealCard)