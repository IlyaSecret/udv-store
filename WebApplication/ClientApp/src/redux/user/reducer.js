import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const authUser = createAsyncThunk(
    "user/authUser",
  async function(userInfo) {
    try {
      let {userEmail, userPassword} = userInfo;
      const response = await fetch(`https://localhost:5001/LoginPage/Login?login=${userEmail}&password=${userPassword}`);
      const data = await response.json();
      return data;
    }
    catch(e) {
      return e;
    }
    
  }
)
export const setUserCoins = createAsyncThunk(
  "user/getUserCoins",
  async function(userInfo) {
    try {
      let {userId, coinsAmount} = userInfo;
      const response = await fetch(`https://localhost:5001/Employee/AddBonus`, {
        method: "POST",
        mode: "no-cors",
      });
      const data = await response.json();
     }
     catch(e) {
      return e;
     }
  }
)



const userSlice = createSlice({
    name: "user",
    initialState : {
        user: {},
        status: null,
        sendStatus : null
    },
    reducers: {
        logoutUser : (state, action) => {
          state.user = {};
          state.status = null;
        }
    },
    extraReducers: {
        [authUser.fulfilled]: (state, action) => {
          state.status = "succes";
          state.user = action.payload;
        },
        [authUser.rejected]: (state, action) => {
          state.status = "rejected";
        },
        [setUserCoins.fulfilled] : (state, action) => {
          state.sendStatus = "success";
        },
        [setUserCoins.rejected] : (state, action) => {
          state.sendStatus = "rejected";
        }
    }
})

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;