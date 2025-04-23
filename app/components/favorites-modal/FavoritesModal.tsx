"use client"
import React from "react"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/app/components/ui/sheet"


const FavoritesModal = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="bg-transparent shadow-none hover:bg-transparent active:scale-[0.95]
          cursor-pointer relative"
        >
          <Image
            src="./refrigerator.svg"
            width={35}
            height={35}
            alt="refrigerator"
          />

          {
            favorites.length > 0 && (
              <span
                className="text-sm font-bold bg-pink-500 text-white rounded-full px-2 py-1
                absolute -top-3 -right-3"
              >
                {favorites.length}
              </span>
            )
          }
        </button>
      </SheetTrigger>

      <SheetContent 
        side="right"
      >
        <SheetHeader>
          <SheetTitle>My Favorites Foods ({favorites.length})</SheetTitle>
        </SheetHeader>

        <div className="flex items-center justify-center gap-2">
          {
            favorites.length === 0
              ? (
                <p>No favorite foods yet.</p>
              )
              : (
                <div className="w-full mt-4">
                  {
                    favorites.map(favorite => (
                      <div key={favorite.idMeal}>

                        <Image src={favorite.strMealThumb} alt={favorite.strMeal} width={100} height={100} />
                      </div>
                    ))
                  }
                </div>
              )
          }
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default FavoritesModal