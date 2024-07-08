import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await fetch('https://apiurl/user/id/');
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
      User: {},
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default userSlice.reducer;