
// import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// export const ordersApi = createApi({
//     reducerPath: "ordersApi",
//     tagTypes : ["Orders"],
//     baseQuery: fetchBaseQuery({baseUrl: "https://localhost:5001"}),
//     endpoints: (build) => ({
//         getOrders : build.query({
//             query: () => ({
//             url: "/Orders/Get",
//         }),
//             providesTags: (result) =>
//         result
//           ? [
//               ...result.map(({ id }) => ({ type: 'Orders', id })),
//               { type: 'Orders', id: 'LIST' },
//             ]
//           : [{ type: 'Orders', id: 'LIST' }],
//         }),
//         getProducts : build.query({
//             query: (orderInfo) => ({
//             url: `Orders/GetProducts?id=${orderInfo.id}`,
//             method: "GET",
//         })
//         }),
//         addOrder : build.mutation({
//             query: (productsArr) => ({
    
//                 url : `/Orders/CreateOrder`,
//                 method: "POST",
//                 body: {
//                     products : productsArr
//                 },
//                 responseHandler: (response) => {
//                     return response.json();
//                 }
//             }),
//             invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
//         }),
//         // removeRequest : build.mutation({
//         //     query: (id) => ({
//         //         url: 
//         //     })
//         // })
//     })
// })

// export const { useGetOrdersQuery, useGetProductsQuery, useAddOrderMutation } = ordersApi;