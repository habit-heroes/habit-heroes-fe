import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserHabits = createAsyncThunk('userHabits/fetchUserHabits', async (userId) => {
  const response = await fetch('https://powerful-scrubland-99007-c4aa236ac7c5.herokuapp.com/api/v1/users/1/habits');
  if (!response.ok) {
    throw new Error('Failed to fetch your habits');
  }
  const data = await response.json();
  return data;
});

export const addUserHabit = createAsyncThunk('userHabits/addUserHabit', async ({ userId, habitId }) => {
    const response = await fetch(`https://apiurl/users/${userId}/habits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ habitId }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add habit to user');
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
        })
        .addCase(addUserHabit.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(addUserHabit.fulfilled, (state, action) => {
            state.loading = false;
            state.userHabits.push(action.payload); 
          })
          .addCase(addUserHabit.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    },
  });
  
  export default userHabitsSlice.reducer