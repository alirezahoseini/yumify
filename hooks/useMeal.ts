"use client"
import { useQuery } from "@tanstack/react-query"
import API from "@/lib/axios"
import { IMealResponse } from "@/types/types"


const useMeal = (enabled = false) => {
  const query = useQuery<IMealResponse>({
    queryKey: ["randomMeal"],
    queryFn: async () => {
      const response = await API.get<IMealResponse>("random.php")
      return response.data
    },
    enabled,
    staleTime: 0
  })

  return {
    meal: query.data?.meals?.[0] || null,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    
    fetchMeal: query.refetch
  }
}

export default useMeal