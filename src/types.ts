export enum BrickStyles {
  empty,
  fill,
}
export type Brick = {
  id: number,
  state: BrickStyles,
};
