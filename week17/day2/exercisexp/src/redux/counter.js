// exercise 1

// import { createSlice } from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     count: 0
//   },
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.count += action.payload;
//     }
//   }
// });

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;


// exercise 2

import { createSlice } from "@reduxjs/toolkit";

export const daySlice = createSlice({
  name: "day",
  initialState: {
    currentDay: "Monday",
    daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  reducers: {
    setNextDay: (state) => {
      const currentIndex = state.daysOfWeek.indexOf(state.currentDay);
      const nextIndex = (currentIndex + 1) % state.daysOfWeek.length;
      state.currentDay = state.daysOfWeek[nextIndex];
    },
    setPreviousDay: (state) => {
      const currentIndex = state.daysOfWeek.indexOf(state.currentDay);
      const previousIndex = (currentIndex - 1 + state.daysOfWeek.length) % state.daysOfWeek.length;
      state.currentDay = state.daysOfWeek[previousIndex];
    }
  }
});

// Action creators are generated for each case reducer function
export const { setNextDay, setPreviousDay } = daySlice.actions;

export default daySlice.reducer;