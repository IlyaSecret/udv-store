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
                //url : `/Messages/SendMessage?type=${requestInfo.requestTypeId}&comment=${requestInfo.comment}`,
                url : `/Messages/SendMessage`,
                method: "POST",
                body: {
                    type: requestInfo.requestTypeId,
                    comment: requestInfo.comment
                },
                // mode: "no-cors",
                responseHandler: (response) => {
                    return response.json();
                }
            }),
            invalidatesTags: [{ type: 'Requests', id: 'LIST' }],
        })
    })
})
// export const getUcoinRequests = createAsyncThunk(
//     "ucoinRequest/getUcoinRequests",
//     async function(requestInfo) {
//         const {requestTypeId, comment} = requestInfo;
//         const response = await fetch(`https://localhost:44309/Messages/SendMessage?type=${requestTypeId}&comment=${comment}`, {
//             method: "POST",
//             mode: "no-cors",
//           });
//         const data = await response.text();
//         return data;
//     }
// )

// const ucoinsRequestSlice =  createSlice({
//     name : "ucoinRequest",
//     initialState: {
//         requests : [],
//         status: null
//     },
//     reducers: {

//     },
//     extraReducers: {

//     }
// })
export const { useGetRequestsQuery, useAddRequestMutation } = ucoinsRequestApi;