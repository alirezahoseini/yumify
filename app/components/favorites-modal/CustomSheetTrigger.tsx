import React from "react"
import Image from "next/image"
import { SheetTrigger } from "../ui/sheet"

type Props = {
  favoritesLength: number
  setIsOpen: (isOpen: boolean) => void
}

const CustomSheetTrigger = ({ favoritesLength, setIsOpen }: Props) => {
  return (
    <SheetTrigger asChild>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="bg-transparent shadow-none hover:bg-transparent active:scale-[0.95]
      cursor-pointer relative"
      >
        <Image
          src="/refrigerator.svg"
          width={35}
          height={35}
          alt="refrigerator"
        />

        {
          favoritesLength > 0 && (
            <span
              className="text-sm font-bold bg-pink-500 text-white rounded-full px-2 py-1
            absolute -top-3 -right-3"
            >
              {favoritesLength}
            </span>
          )
        }
      </button>
    </SheetTrigger>
  )
}

export default CustomSheetTrigger