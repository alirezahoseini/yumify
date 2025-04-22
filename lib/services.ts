/* eslint-disable no-console */
import API from "./axios"

export const getMeal = async (id: string) => {
  try {
    const response = await API.get(`lookup.php?i=${id}`)

    if (response?.data?.meals?.length) {
      const meal = response.data.meals[0]
      return meal
    }

    return false
  }
  catch (err) {
    console.error("Error fetching meal:", err)
    throw err
  }
}