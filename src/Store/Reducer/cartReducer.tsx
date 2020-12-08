import {createSlice} from '@reduxjs/toolkit'
import {productType,actionType} from '../../types/type'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem (state:productType[],action:actionType): any {
            console.log('add product')
           return [...state,action.payload ]
        }
    }
})

export const {addItem} = cartSlice.actions;
export const displayCart = (state: any) => state.cart

export default cartSlice.reducer