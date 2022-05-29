import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ucoinsRequestApi = createApi({
    reducerPath: "ucoinsRequestApi",
    tagTypes : ["Requests", "Orders"],
    baseQuery: fetchBaseQuery({baseUrl: "https://localhost:5001"}),
    endpoints: (build) => ({
        getRequests : build.query({
            query: () => ({
            url: "Messages/Get",
        }),
            providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Requests', id })),
              { type: 'Requests', id: 'LIST' },
            ]
          : [{ type: 'Requests', id: 'LIST' }],
        }),
        addRequest : build.mutation({
            query: (requestInfo) => ({
    
                url : `/Messages/SendMessage`,
                method: "POST",
                body: {
                    type: requestInfo.requestTypeId,
                    comment: requestInfo.comment
                },
            }),
            invalidatesTags: [{ type: 'Requests', id: 'LIST' }],
        }),
        removeRequest : build.mutation({
            query: (id) => ({
    
                url : `/Messages/SendMail?id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: 'Requests', id: 'LIST' }],
        }),
        getOrders : build.query({
            query: () => ({
            url: "/Orders/Get",
        }),
            providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Orders', id })),
              { type: 'Orders', id: 'LIST' },
            ]
          : [{ type: 'Orders', id: 'LIST' }],
        }),
        getProducts : build.query({
            query: (id) => ({
            url: `Orders/GetProducts?id=${id}`,
            method: "GET",
        }),
        invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
        }),
        addOrder : build.mutation({
            query: (productsArr) => ({
    
                url : `/Orders/CreateOrder`,
                method: "POST",
                body: {
                    products : productsArr
                },
                responseHandler: (response) => {
                    return response.json();
                }
            }),
            invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
        }),
        
    })
})

export const { useGetRequestsQuery, useAddRequestMutation, useRemoveRequestMutation, useGetOrdersQuery, useGetProductsQuery, useAddOrderMutation } = ucoinsRequestApi;