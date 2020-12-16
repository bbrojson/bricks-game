/* eslint-disable import/prefer-default-export */
import { Brick, BrickStyles } from '../types';

export function getRandomBrick(): Brick {
  return {
    id: Math.random(),
    state: BrickStyles.empty,
  };
}

export function getEmptyBrick(): Brick {
  return {
    id: Math.random(),
    state: BrickStyles.empty,
  };
}
