import React from "react"

type Props = {
  params: Promise<{
    id: string
  }>
}

const page = async ({ params }: Props) => {
  const resolvedParams = await params
  const { id } = resolvedParams

  return (
    <div>{id}</div>
  )
}

export default page