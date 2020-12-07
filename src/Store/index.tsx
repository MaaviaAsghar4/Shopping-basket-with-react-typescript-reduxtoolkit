import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './Reducer/basketReducer'

const store = configureStore({
    reducer: {
        basket: basketReducer,
    }
})

export default store