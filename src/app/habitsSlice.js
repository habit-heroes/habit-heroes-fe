import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHabits = createAsyncThunk('habits/fetchHabits', async () => {
  const response = await fetch('https://apiurl');
  if (!response.ok) {
    throw new Error('Failed to fetch habits');
  }
  const data = await response.json();
  return data;
});

const habitsSlice = createSlice({
    name: 'habits',
    initialState: {
      habits: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchHabits.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchHabits.fulfilled, (state, action) => {
          state.loading = false;
          state.habits = action.payload;
        })
        .addCase(fetchHabits.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default habitsSlice.reducer;