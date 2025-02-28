import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { dataReducer } from "../features/dataSlice";

const usersPersistConfig = {
  key: 'cbpone:user',
  storage,
  whitelist: [''],
};

const rootReducer = combineReducers({
  dataState: persistReducer(usersPersistConfig, dataReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ],
      },
    });
  },
});

export const persistor = persistStore(store);
