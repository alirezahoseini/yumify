import React from "react"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"


const FavoritesModal = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="./refrigerator.svg"
          width={35}
          height={35}
          alt="refrigerator"
        />
      </SheetTrigger>

      <SheetContent 
        side="bottom"
        className="w-full max-w-lg mx-auto min-h-96 rounded-t-2xl"
      >
        <SheetHeader>
          <SheetTitle>My Favorites Foods</SheetTitle>
          
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default FavoritesModal