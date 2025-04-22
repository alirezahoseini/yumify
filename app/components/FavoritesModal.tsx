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
        side="right"
      >
        <SheetHeader>
          <SheetTitle>My Favorites Foods</SheetTitle>
        </SheetHeader>

        <div className="flex items-center justify-center gap-2">
          <Button>
            m
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default FavoritesModal