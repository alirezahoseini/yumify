import { configureStore } from "@reduxjs/toolkit"
import favoritesSlice from "./favoritesSlice"

const store = configureStore({ reducer: { favoritesSlice } })

export default store