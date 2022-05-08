import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const authUser = createAsyncThunk(
    "user/authUser",
  async function(userInfo) {
    let {userEmail, userPassword} = userInfo;
    const response = await fetch(`https://localhost:44309/LoginPage/Login?login=${userEmail}&password=${userPassword}`);
    const data = response.json();
    return data;
  }
)


const userSlice = createSlice({
    name: "user",
    initialState : {
        user: {},
        status: null
    },
    reducers: {
        logoutUser : (state, action) => {
          state.user = {};
          state.status = null;
        }
    },
    extraReducers: {
        [authUser.pending]: (state, action) => {
        },
        [authUser.fulfilled]: (state, action) => {
          state.status = action.payload.data
          state.user = action.payload;
        },
        [authUser.rejected]: (state, action) => {
    
        },
    }
})

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;