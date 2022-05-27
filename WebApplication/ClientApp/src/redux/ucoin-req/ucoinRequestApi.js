import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ucoinsRequestApi = createApi({
    reducerPath: "ucoinsRequestApi",
    tagTypes : ["Requests"],
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
        })
        
    })
})

export const { useGetRequestsQuery, useAddRequestMutation, useRemoveRequestMutation } = ucoinsRequestApi;