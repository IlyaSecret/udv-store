import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk(
    "users/getUserCoins",
    async function() {
      try {
        const requestUrl = "https://localhost:5001/Employee/Get";
        const response = await fetch(requestUrl);
        const data = await response.json();
        return data;
      }
      catch(e) {
        return e;
      } 
    }
  )


const allUsersSlice = createSlice({
    name : "AllUsers",
    initialState: {
        users: [],
        status: null
    },
    reducers: {

    },
    extraReducers: {
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = "success";
            state.users = action.payload;
        },
        [getAllUsers.rejected] : (state, action) => {
            state.status = "rejected"
        }
    }

})

export const {} = allUsersSlice.actions;
export default allUsersSlice.reducer;