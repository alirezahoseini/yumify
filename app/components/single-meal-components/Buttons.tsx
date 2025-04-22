"use client"
import { useRouter } from "next/navigation"
import { ArrowLeft, Heart } from "lucide-react"
import React from "react"
import { Button } from "../ui/button"

const Buttons = () => {
  const router = useRouter()
  return (
    <div
      className="flex items-center justify-center gap-2 w-full 
      fixed bottom-0 left-0 right-0 max-w-xl mx-auto mb-4"
    >
      <Button 
        onClick={() => router.back()} 
        className="cursor-pointer"
      >
        <ArrowLeft />
        Back
      </Button>

      <Button
        variant="outline"
        className="flex items-center gap-2 cursor-pointer"
      >
        <Heart />
        Add to Favorites
      </Button>
    </div>
  )
}

export default Buttons