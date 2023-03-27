import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const formData = createAsyncThunk("auth/formData", async (user) => {
  try {
    return await formData(user);
  } catch (error) {
    console.log(error);
  }
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    userDetail(state, action) {
      state.user = action.payload;
    },
  },
  // extraReducers: (builders) => {
  //   builders
  //     .addCase(formData.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(formData.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = false;
  //       state.user = action.payload;
  //     })
  //     .addCase(formData.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isError = true;
  //       state.user = null;
  //       state.user = action.payload;
  //     });
});
export const personalData = (data) => (dispatch) => {
  console.log("data");
  console.log("data");
  console.log("data");
  console.log(data);
  dispatch(authSlice.actions.userDetail(data));
};

export const { reset } = authSlice.actions;
export default authSlice.reducer;
