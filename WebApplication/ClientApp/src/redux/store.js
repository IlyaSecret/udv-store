import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import userReducer from "./user/reducer";
import allUsersReducer from "./user/all-users-reducer";
import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { compose } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ucoinsRequestApi } from "./ucoin-req/ucoinRequestApi";
import { ordersApi } from "./orders/ordersApi";


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    users: allUsersReducer,
    [ucoinsRequestApi.reducerPath]: ucoinsRequestApi.reducer,
    [ordersApi.reducerPath] : ordersApi.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['products']
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    compose: (applyMiddleware(ordersApi.middleware), applyMiddleware(ucoinsRequestApi.middleware))
})

export const persistor = persistStore(store);
export default store;
