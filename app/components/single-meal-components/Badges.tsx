import { MapPin } from "lucide-react"
import { Box } from "lucide-react"
import React from "react"
import { IMeal } from "@/types/types"

type Props = {
  data: IMeal
}

const Badges = ({ data }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-1">
        <Box />

        <p>{data.strCategory}</p>
      </div>

      <div className="flex items-center justify-center gap-1">
        <MapPin />

        <p>{data.strArea}</p>
      </div>
    </div>
  )
}

export default Badges