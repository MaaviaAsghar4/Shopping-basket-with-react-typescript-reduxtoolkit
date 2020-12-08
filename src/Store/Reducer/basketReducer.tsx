import {createSlice} from '@reduxjs/toolkit'

export const basketSlice = createSlice({
    name: 'basket',
    initialState: [
        {id: 1, title: 'Vivo V20', imgURL: 'https://www.telemart.pk/uploads/product_image/product_124338_1_thumb.jpg', description: 'Condition 10/10. Seven day warranty. Battery timing excellent',edit: false, price: 55799},
        {id: 2, title: 'Apple Iphone 12 Pro', imgURL: 'https://www.telemart.pk/uploads/product_image/product_123630_1_thumb.jpg', description: 'Condition 10/10. Seven day warranty. Battery timing excellent',edit: false, price: 347499},
        {id: 3, title: 'Apple Iphone 12 Mini', imgURL: 'https://www.telemart.pk/uploads/product_image/product_123619_1_thumb.jpg', description: 'Condition 10/10. Seven day warranty. Battery timing excellent',edit: false, price: 194999},
        {id: 4, title: 'Samsung Galaxy Z', imgURL: 'https://www.telemart.pk/uploads/product_image/product_122481_1_thumb.jpg', description: 'Condition 10/10. Seven day warranty. Battery timing excellent',edit: false, price: 304999},
        {id: 5, title: 'Huawei Y9a', imgURL: 'https://www.telemart.pk/uploads/product_image/product_122090_1_thumb.jpg', description: 'Condition 10/10. Seven day warranty. Battery timing excellent',edit: false, price: 40999},
        {id: 6, title: 'Samsung Galaxy A51', imgURL: 'https://www.telemart.pk/uploads/product_image/product_119779_1_thumb.jpg', description: 'Condition 10/10. Seven day warranty. Battery timing excellent',edit: false, price: 51699},
        {id: 7, title: 'Samsung Galaxy Note 20', imgURL: 'https://www.telemart.pk/uploads/product_image/product_118826_1_thumb.jpg', description: 'Condition 10/10. Seven day warranty. Battery timing excellent',edit: false, price: 202999},
        {id: 8, title: 'Apple Iphone SE', imgURL: 'https://www.telemart.pk/uploads/product_image/product_118075_1_thumb.jpg', description: 'Condition 10/10. Seven day warranty. Battery timing excellent',edit: false, price: 84999},
        {id: 9, title: 'Xiaomi Poco X3', imgURL: 'https://www.telemart.pk/uploads/product_image/product_123114_1_thumb.jpg', description: 'Condition 10/10. Seven day warranty. Battery timing excellent',edit: false, price: 39399},
    ],
    reducers: {
        display: (state) => {return [...state]}
    }

})

export const {display} = basketSlice.actions;
export const displayReducer = (state: any) => state.basket

export default basketSlice.reducer;