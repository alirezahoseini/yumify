import React from "react"
import SingleMaelNotFound from "../components/SingleMaelNotFound"
import { getMeal } from "@/lib/services"

type Props = {
  params: Promise<{
    id: string
  }>
}

const page = async ({ params }: Props) => {
  const resolvedParams = await params
  const { id } = resolvedParams

  const data = await getMeal(id)


  if (data === null || undefined) {
    console.log("null=> ", data)
  }
  else {
    console.log("Ok => ", data)
  }

  return (
    
    data === null || data === undefined || !data || data === "I"
      ? (
        <SingleMaelNotFound status={data} />
      )
      : (
        <>{data.idMeal}</>
      )
  )
}

export default page