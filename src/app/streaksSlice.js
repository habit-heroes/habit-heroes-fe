import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateUserHabit = async (userId, habitId) => {
      const response = await fetch(`https://powerful-scrubland-99007-c4aa236ac7c5.herokuapp.com/api/v1/users/${userId}/habits`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_habit_id: habitId
        }),
      })
      console.log(response)
    };
      
export const fetchUserStreaks = createAsyncThunk(
    'streaks/fetchUserStreaks',
    async (userId) => {
        const response = await fetch(`https://powerful-scrubland-99007-c4aa236ac7c5.herokuapp.com/api/v1/users/${userId}/streaks`);
  if (!response.ok) {
    throw new Error('Failed to fetch habits');
  }
  const data = await response.json();
  console.log('datahabits', data)
  return data;
    })

const streaksSlice = createSlice({
    name: 'streaks',
    initialState: {
      streaks: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserStreaks.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserStreaks.fulfilled, (state, action) => {
          state.loading = false;
          state.streaks = action.payload;
        })
        .addCase(fetchUserStreaks.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

export default streaksSlice.reducer;