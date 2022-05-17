import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUcoinRequests = createAsyncThunk(
    "ucoinRequest/getUcoinRequests",
    async function(requestInfo) {
        const {requestTypeId, comment} = requestInfo;
        const response = await fetch(`https://localhost:44309/Messages/SendMessage?type=${requestTypeId}&comment=${comment}`, {
            method: "POST",
            mode: "no-cors",
          });
        const data = await response.text();
        return data;
    }
)

const ucoinsRequestSlice =  createSlice({
    name : "ucoinRequest",
    initialState: {
        requests : [],
        status: null
    },
    reducers: {

    },
    extraReducers: {

    }
})