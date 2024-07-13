import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserHabits = createAsyncThunk('userHabits/fetchUserHabits', async (userId, { rejectWithValue }) => {
  try {
    console.log('Fetching user habits for ID:', userId); // Log before fetching
    const response = await fetch(`https://powerful-scrubland-99007-c4aa236ac7c5.herokuapp.com/api/users/${userId}/habits`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('fetchUserHabits error response:', errorText);
      return rejectWithValue(errorText);
    }
    const data = await response.json();
    console.log('Fetched user habits data:', data); // Log fetched data
    return data;
  } catch (error) {
    console.error('fetchUserHabits error:', error);
    return rejectWithValue(error.message);
  }
});

export const addUserHabit = createAsyncThunk('userHabits/addUserHabit', async ({ habit, userId }, { rejectWithValue }) => {
  try {
    console.log('Adding habit for user:', userId, 'habit:', habit); // Log before adding
    const response = await fetch(`https://powerful-scrubland-99007-c4aa236ac7c5.herokuapp.com/api/v1/users/${userId}/habits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
        habit_id: habit.id
      })
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error('addUserHabit error response:', errorText);
      return rejectWithValue(errorText);
    }
    const data = await response.json();
    console.log('addUserHabit data:', data); // Log the fetched data
    return data;
  } catch (error) {
    console.error('addUserHabit error:', error);
    return rejectWithValue(error.message);
  }
});
