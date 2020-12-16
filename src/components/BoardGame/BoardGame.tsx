import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { Grid, Button } from '@material-ui/core';
import {
  resetBriks,
  createBricks,
  insertBrickOnBoard,
  bricksSelector,
} from '../../store/bricksSlice';
import { useStyles } from './styles';
import { BrickStyles } from '../../types';

interface Props {
  gridLength: number,
}

export default function BoardGame({
  gridLength,
}: Props) {
  const classes = useStyles({ grid: gridLength });
  const dispatch = useDispatch();
  const { bricks } = useSelector(bricksSelector);

  // reset game on reload
  useEffect(() => {
    dispatch(resetBriks());
    dispatch(createBricks(gridLength));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleButtonOnClick(idx: number) {
    dispatch(insertBrickOnBoard(idx));
  }

  function greedStyle(i: number) {
    const x = i % gridLength;
    const y = Math.floor(i / gridLength);
    if (
      (Math.floor(x / 3) % 2 && !(Math.floor(y / 3) % 2))
      || (!(Math.floor(x / 3) % 2) && Math.floor(y / 3) % 2)
    ) {
      return classes.brickEmpty;
    }
    return classes.brickEmptyLighter;
  }

  return (
    <Grid container className={classes.root}>
      {bricks.map((el, idx) => (
        <Grid
          key={el.id}
          item
          className={clsx(classes.grid, greedStyle(idx))}
        >
          <Button
            onClick={() => handleButtonOnClick(idx)}
            className={clsx(classes.button, el.state === BrickStyles.fill && classes.brickFull)}
          >
            {null}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
