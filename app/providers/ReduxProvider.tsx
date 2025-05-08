"use client"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import store from "@/store/store"

persistStore(store)

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider 