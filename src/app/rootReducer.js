import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/Auth/userSlice.js';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
