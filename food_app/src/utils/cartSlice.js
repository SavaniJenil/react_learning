import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        // addItem is a action and function is a reducer function of a action.
        addItem: (state, action) => {
            //We are directly mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
    },
});



export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;