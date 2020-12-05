/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brick } from '../types';
import { RootState } from './store';

export interface BrickState {
  bricks: Brick[];
  score: number,
}

export const initialState: BrickState = {
  bricks: [],
  score: 0,
};

const bricksSlice = createSlice({
  name: 'bricks',
  initialState,
  reducers: {
    resetBriks(state) {
      state.bricks = [];
      state.score = 0;
    },
    getBricks(state, action: PayloadAction<Brick[]>) {
      state.bricks = action.payload;
    },
  },
});

export const bricksSelector = (state: RootState) => state.bricks;

export const {
  resetBriks,
  getBricks,
} = bricksSlice.actions;

export default bricksSlice.reducer;
