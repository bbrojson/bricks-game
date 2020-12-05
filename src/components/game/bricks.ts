/* eslint-disable import/prefer-default-export */
import { Brick, BrickState } from '../../types';

export function createBrick(): Brick {
  return {
    id: Date.now() + Math.random(),
    state: BrickState.empty,
  };
}
