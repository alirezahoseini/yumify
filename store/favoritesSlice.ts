import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IMeal } from "@/types/types"

type FavoritePayload = {
  idMeal: string
}

const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState: { favorites: [] as IMeal[] },
  reducers: {
    addFavorite: (state, action: PayloadAction<IMeal>) => {
      state.favorites.push(action.payload)
    },
    removeFavorite: (state, action: PayloadAction<FavoritePayload>) => {
      state.favorites = state.favorites.filter(meal => meal.idMeal !== action.payload.idMeal)
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer