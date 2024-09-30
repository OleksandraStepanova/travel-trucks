import { configureStore } from "@reduxjs/toolkit";
import campersReduser from "./campers/slice";
import filtersReducer from "./filters/slice";
import selectedReducer from './selected/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const selectedPersistConfig = {
  key: "selected",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
    reducer: {
        campers: campersReduser,
        filters: filtersReducer,
        selected:  persistReducer(selectedPersistConfig, selectedReducer),
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);