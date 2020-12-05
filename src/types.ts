export enum BrickState {
  empty,
  fill,
}
export type Brick = {
  id: number,
  state: BrickState,
};
