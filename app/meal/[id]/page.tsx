import React from "react"
import SingleMealWrapper from "@/app/components/single-meal-components/SingleMealWrapper"

type Props = {
  params: Promise<{
    id: string
  }>
}


const page = async ({ params }: Props) => {
  const resolvedParams = await params
  const { id } = resolvedParams


  return (
    <SingleMealWrapper mealId={id} />
  )
}

export default page