import { persistReducer, persistStore } from "redux-persist";
import counterReducer from "./counterReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore } from 'redux';

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
  };
  
  const persistedReducer = persistReducer(persistConfig, counterReducer);
  export const store = createStore( persistedReducer);
  
  export let persistor = persistStore(store);