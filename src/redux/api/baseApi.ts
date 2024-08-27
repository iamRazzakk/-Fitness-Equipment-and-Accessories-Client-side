import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    tagTypes: ['ProductList'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                method: "GET",
                url: '/products',
            }),
            providesTags: ['ProductList'],
        }),
        getSingleProducts: builder.query({
            query: (id) => ({
                method: "GET",
                url: `/products/${id}`,
            }),
        }),
        updateSingleProducts: builder.mutation({
            query: ({ id, data }) => ({
                method: "PUT",
                url: `/products/${id}`,
                body: data,
                headers: {
                    "Content-Type": 'application/json',
                },
            }),
            invalidatesTags: ['ProductList'],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                method: "DELETE",
                url: `/products/${id}`,
            }),
            invalidatesTags: ['ProductList'],
        }),
        addProduct: builder.mutation({
            query: (newProduct) => ({
                method: "POST",
                url: `/products`,
                body: newProduct,
                headers: {
                    "Content-Type": 'application/json',
                },
            }),
            invalidatesTags: ['ProductList'],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetSingleProductsQuery,
    useUpdateSingleProductsMutation,
    useDeleteProductMutation,
    useAddProductMutation,
} = baseApi;