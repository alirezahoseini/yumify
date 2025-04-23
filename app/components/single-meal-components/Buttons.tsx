"use client"
import { useRouter } from "next/navigation"
import { ArrowLeft, Heart } from "lucide-react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../ui/button"
import { IMeal } from "@/types/types"
import { addFavorite, removeFavorite } from "@/store/favoritesSlice"
import { RootState } from "@/store/store"

const Buttons = ({ meal }: { meal: IMeal }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const isFavorite =
  useSelector((state: RootState) => state.favorites.favorites.some(favorite => favorite.idMeal === meal.idMeal))

  return (
    <div
      className="flex items-center justify-center gap-2 w-full 
      fixed bottom-0 left-0 right-0 max-w-xl mx-auto mb-4"
    >
      <Button 
        onClick={() => router.back()} 
        className="cursor-pointer active:scale-95 transition-all duration-300"
      >
        <ArrowLeft />
        Back
      </Button>

      <Button
        variant="outline"
        className={
          `flex items-center gap-2 cursor-pointer active:scale-95 transition-all duration-300 
          ${isFavorite ? "bg-pink-500 border-pink-500 hover:bg-pink-500/90 text-white hover:text-white" : ""}`
        }
        onClick={
          () => {
            if (isFavorite) {
              dispatch(removeFavorite({ idMeal: meal.idMeal }))
            }
            else {
              dispatch(addFavorite(meal))
            }
          }
        }
      >
        <Heart />

        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </Button>
    </div>
  )
}

export default Buttons