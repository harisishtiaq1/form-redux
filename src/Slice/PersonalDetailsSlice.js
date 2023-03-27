import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    gender: "",
    martialStatus: "",
  },
  reducers: {
    updateField: (state, action) => {
      const { fieldName, value } = action.payload;
      state[fieldName] = value;
    },
    // other form-related reducers
  },
});

export const { updateField } = formSlice.actions;

export default formSlice.reducer;
