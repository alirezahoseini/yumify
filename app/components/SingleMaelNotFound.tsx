
import Link from "next/link"
import React from "react"

type Props = {
  status: string
}

const SingleMaelNotFound = (props: Props) => {
  const status = props.status


  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="font-bold text-2xl my-4">
        {status === "I" && "Meal Not Found!"}

        {status === null || status === undefined || !status && "Cannot load meal data!"}
      </h1>

      <Link className="bg-stone-200 rounded-lg px-5 py-2" href="/">Back to Home</Link>
    </div>
  )
}

export default SingleMaelNotFound