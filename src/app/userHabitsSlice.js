import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserHabits = createAsyncThunk('userHabits/fetchUserHabits', async () => {
  const response = await fetch('https://apiurl/user/id/habits');
  if (!response.ok) {
    throw new Error('Failed to fetch your habits');
  }
  const data = await response.json();
  return data;
});

const userHabitsSlice = createSlice({
    name: 'userHabits',
    initialState: {
      UserHabits: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserHabits.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserHabits.fulfilled, (state, action) => {
          state.loading = false;
          state.userHabits = action.payload;
        })
        .addCase(fetchUserHabits.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default userHabitsSlice.reducer;