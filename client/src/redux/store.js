import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootreducer = combineReducers({
    user: userReducer,
});

const persistConfig = {
   key: 'root',
   storage,
   version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootreducer);

export const store = configureStore({
  reducer: persistedReducer,
  // meddileware is to prevent default error, if we don't use middleware we can get error
 middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false }),
});

export const persistor = persistStore(store);