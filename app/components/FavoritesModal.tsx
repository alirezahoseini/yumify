import React from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/app/components/ui/sheet"


const FavoritesModal = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="bg-transparent shadow-none hover:bg-transparent active:scale-[0.95]
          cursor-pointer"
        >
          <Image
            src="./refrigerator.svg"
            width={35}
            height={35}
            alt="refrigerator"
          />
        </Button>
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