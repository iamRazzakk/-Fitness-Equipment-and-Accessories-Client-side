import { IProducts } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
    products: IProducts[];
    selectedItems: number;
    totalPrice: number;
    grandTotal: number;
}

const initialState: CartState = {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
    grandTotal: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cddToCart: (state, action) => {
            const { quantity, product } = action.payload
            // state.products.push({ ...product })
            const isExist = state.products.find(item => item._id === product._id);
            if (isExist) {
                isExist.quantity! += 1;
            } else {
                state.products.push({ ...product, quantity: quantity });
            }
            state.selectedItems = calculateSelectedItems(state);
            state.totalPrice = calculateTotalPrice(state);
            state.grandTotal = state.totalPrice;
        }

    },
});

// calculate the total number of selected items
const calculateSelectedItems = (state: CartState): number => {
    return state.products.reduce((total, product) => total + (product.quantity || 0), 0);
};

// calculate the total price
const calculateTotalPrice = (state: CartState): number => {
    return state.products.reduce((total, product) => total + (product.price * (product.quantity || 0)), 0);
};

export const { cddToCart } = cartSlice.actions;

export default cartSlice.reducer;
