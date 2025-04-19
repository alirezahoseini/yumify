import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState: { favorites: [] },
  reducers: {
    addFavorite: state => {
      console.log(state)
    }
  }
})

export const { addFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer