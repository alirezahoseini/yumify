import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"
import favoritesSlice from "./favoritesSlice"

const perstistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({ favorites: favoritesSlice })

const persistedReducer = persistReducer(perstistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(
    { serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] } }
  )
})

export type RootState = ReturnType<typeof store.getState>

export default store