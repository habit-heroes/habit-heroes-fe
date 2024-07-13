import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('user/fetchUser', async (userId, { rejectWithValue }) => {
  try {
    console.log('Fetching user with ID:', userId); // Log userId being fetched
    const response = await fetch(`https://powerful-scrubland-99007-c4aa236ac7c5.herokuapp.com/api/users/${userId}`);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('fetchUser error response:', errorText);
      return rejectWithValue(errorText);
    }
    const data = await response.json();
    console.log('Fetched user data:', data); // Log fetched user data
    return data;
  } catch (error) {
    console.error('fetchUser error:', error);
    return rejectWithValue(error.message);
  }
});
