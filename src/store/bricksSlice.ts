/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brick, BrickStyles } from '../types';
import { RootState, AppThunk } from './store';
import { getEmptyBrick } from '../utils/bricks';

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
    changeBrickStatus(state, action: PayloadAction<{ idx: number, state: BrickStyles }>) {
      // const index = state.bricks.findIndex((brick) => brick.id === action.payload.id);
      state.bricks[action.payload.idx].state = action.payload.state;
    },
    createBricks(state, action: PayloadAction<number>) {
      const gridLength = action.payload;
      const array = new Array(gridLength * gridLength).fill(0).map(() => (getEmptyBrick()));
      state.bricks = array;
    },
  },
});

export const bricksSelector = (state: RootState) => state.bricks;

export const {
  resetBriks,
  getBricks,
  createBricks,

  changeBrickStatus,
} = bricksSlice.actions;

export default bricksSlice.reducer;

export function insertBrickOnBoard(idx: number): AppThunk {
  return (dispatch) => {
    try {
      dispatch(changeBrickStatus({
        idx,
        state: BrickStyles.fill,
      }));
    } catch (error) {
      //
    }
  };
}
