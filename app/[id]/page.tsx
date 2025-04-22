import React from "react"
import Image from "next/image"
import { Youtube } from "lucide-react"
import Link from "next/link"
import SingleMaelNotFound from "../components/SingleMaelNotFound"
import Buttons from "../components/single-meal-components/Buttons"
import Ingredients from "../components/single-meal-components/Ingredients"
import Badges from "../components/single-meal-components/Badges"
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


  return (
    data === null || data === undefined || !data || data === "I"
      ? (
        <SingleMaelNotFound status={data} />
      )
      : (
        <div className="px-4 lg:px-0 mt-5 mb-14 mx-auto max-w-xl">
          <div
            className="border rounded-2xl p-4 shadow-md bg-white w-full flex 
            flex-col items-center justify-start gap-4"
          >
            <Image 
              width={800}
              height={800}
              src={data.strMealThumb}
              alt=""
              className="rounded-2xl w-full "
            />

            <h1 className="text-2xl font-bold">{data.strMeal}</h1>

            <Badges data={data} />

            <p className="text-base text-gray-600">{data.strInstructions}</p>

            {
              data.strYoutube && (
                <Link
                  className="w-full bg-red-500 text-white hover:bg-red-600 rounded-md p-2 
                  text-center font-black flex items-center justify-center gap-2 my-5" 
                  href={data.strYoutube}
                  target="_blank"
                >
                  <Youtube />
                  Watch on Youtube
                </Link>
              ) 
            }

            <Ingredients data={data} />

          </div>

          <Buttons />
        </div>
      )
  )
}

export default page