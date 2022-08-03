import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  user: { name: "hero", age: 0 },
  createRoutine: { classes: [] },
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addInfo: (state, action) => {
      state.createRoutine = { ...action.payload, ...state.createRoutine };
    },
    addClasses: (state, action) => {
      state.createRoutine.classes = [...state.createRoutine?.classes, action.payload];
    },

  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setUser, addInfo, addClasses } =
  dataSlice.actions;
export const allData = (state) => state.data;
export default dataSlice.reducer;
