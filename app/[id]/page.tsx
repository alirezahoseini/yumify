import React from "react"

type IParams = {
  params: { id: string }
}

const page = async ({ params }: IParams) => {
  const awaitedParams = await params
  const { id } = awaitedParams

  return (
    <div>{id}</div>
  )
}

export default page