/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import bricksReducer from './bricksSlice';

const store = configureStore({
  reducer: {
    bricks: bricksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export default store;
