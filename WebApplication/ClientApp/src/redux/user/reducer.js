import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const sendRequest = async (email: string, password:string) => {
//     const response = await fetch(`https://localhost:44309/LoginPage?login=${email}&password=${password}`);
//     const data = await response.text();
//     if (await data == "Успешно") {
//       const response1 = await fetch("https://localhost:44309/Employee");
//       const data1 = await response1.json();
//       const userData = await data1.filter((user : any) => user["email"] == email);
//       console.log(userData);
      
//     }
//   }
//   sendRequest("Email0", "0");

export const authUser = createAsyncThunk(
    "user/authUser",
  async function(userInfo) {
    const {userEmail, userPassword} = userInfo;
    const response = await fetch(`https://localhost:44309/LoginPage?login=${userEmail}&password=${userPassword}`);
    const data = await response.text();
    if (await data == "Успешно") {
               const response1 = await fetch("https://localhost:44309/Employee");
               const data1 = await response1.json();
               const userData = await data1.filter((user) => user["email"] == userEmail);
               return {userData, data};
  }
}
)


const userSlice = createSlice({
    name: "user",
    initialState : {
        user: {},
        status: null
    },
    reducers: {
        
    },
    extraReducers: {
        [authUser.pending]: (state, action) => {
        },
        [authUser.fulfilled]: (state, action) => {
          state.status = action.payload.data
          state.user = action.payload.userData;
        },
        [authUser.rejected]: (state, action) => {
    
        },
    }
})
export default userSlice.reducer;