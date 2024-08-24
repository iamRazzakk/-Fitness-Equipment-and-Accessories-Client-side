import { IProducts } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
    product: IProducts;
    quantity: number;
}
interface CartState {
    products: IProducts[];
    items: CartItem[];
    selectedItems: number;
    totalPrice: number;
    grandTotal: number;
}

const initialState: CartState = {
    products: [],
    items: [],
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
        },

        // for increment quentity
        incrementQuantity: (state, action) => {
            const product = state.products.find(item => item._id === action.payload);
            if (product) {
                product.quantity! += 1;
                state.selectedItems = calculateSelectedItems(state);
                state.totalPrice = calculateTotalPrice(state);
                state.grandTotal = state.totalPrice;
            }
        },
        // for decrement quentity
        decrementQuantity: (state, action) => {
            const product = state.products.find(item => item._id === action.payload)
            if (product && product?.quantity! > 1) {
                product.quantity! -= 1
                state.selectedItems = calculateSelectedItems(state);
                state.totalPrice = calculateTotalPrice(state);
                state.grandTotal = state.totalPrice;
            }
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

export const { cddToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
