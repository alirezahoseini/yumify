"use client"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import CustomSheetTrigger from "./CustomSheetTrigger"
import SheetMealCard from "./SheetMealCard"
import { RootState } from "@/store/store"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "@/app/components/ui/sheet"

const FavoritesSheet = () => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <CustomSheetTrigger
        favoritesLength={favorites.length}
        setIsOpen={setIsOpen}
      />

      <SheetContent 
        side="right"
      >
        <SheetHeader>
          <SheetTitle>My Favorites Meals</SheetTitle>

          <SheetDescription>
            Manage your favorite meals collection
          </SheetDescription>
        </SheetHeader>

        <div className="flex items-start justify-center gap-2">
          {
            favorites.length === 0
              ? (
                <p>No favorite meals yet.</p>
              )
              : (
                <div className="w-full">
                  {
                    favorites.map(favorite => (
                      <SheetMealCard key={favorite.idMeal} meal={favorite} setIsOpen={setIsOpen} />
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

export default FavoritesSheet