import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [] as any,
    selectedItems: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0,
    grandTotal: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.products.find(product => product.id === action.payload.id)
            if (!isExist) {
                state.products.push({ ...action.payload })
            }
            // state.selectedItems = state.products.reduce(
            //     (total: number, product: any) => {
            //         return Number(total + product.quantity)
            //     }
            // )
        }
    },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer