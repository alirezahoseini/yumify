import React from "react"

type IParams = {
  params: { id: string }
}

const page = async ({ params }: IParams) => {
  const awaitedParams = await params
  const { id } = awaitedParams
  console.log(id)

  return (
    <div>page</div>
  )
}

export default page