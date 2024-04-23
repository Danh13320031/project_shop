import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../apis/userApi';

const register = createAsyncThunk('user/register', async (payload) => {
  try {
    // Call Api to Register
    const data = await userApi.postRegister(payload);

    // Save Data in LocalStorage
    window.localStorage.setItem('access_token', data.jwt);
    window.localStorage.setItem('user', JSON.stringify(data.user));

    return data.user;
  } catch (error) {
    console.log(error);
  }
});

const initState = {
  current: {},
  setting: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

const { reducer } = userSlice;
export default reducer;
