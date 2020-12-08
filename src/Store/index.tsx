import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './Reducer/basketReducer'
import cartReducer from './Reducer/cartReducer'

const store = configureStore({
    reducer: {
        basket: basketReducer,
        cart: cartReducer
    }
})

export default store