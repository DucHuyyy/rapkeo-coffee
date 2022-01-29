import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './Slice/modalSlice'
import loginReducer from './Slice/loginSlice'
import productReducer from './Slice/productSlice'
import ordersReducer from './Slice/ordersSlice'

const rootReducer = {
    modal: modalReducer,
    login: loginReducer,
    product: productReducer,
    orders: ordersReducer,
}

export const store = configureStore({
    reducer: rootReducer,
})