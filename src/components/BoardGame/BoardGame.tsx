import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { Grid, Button } from '@material-ui/core';
import { resetBriks, getBricks } from '../../store/bricksSlice';
import { useStyles } from './styles';

const GRID_LENGTH = 9;
const array = new Array(GRID_LENGTH * GRID_LENGTH).fill(0).map((el, i) => ({ id: i }));

export default function BoardGame() {
  const classes = useStyles({ grid: GRID_LENGTH });
  const dispatch = useDispatch();

  // reset game on reload
  useEffect(() => {
    dispatch(resetBriks());
    dispatch(getBricks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleButtonOnClick(index: number) {
    console.log(index);
  }

  function greedStyle(i: number) {
    const x = i % GRID_LENGTH;
    const y = Math.floor(i / GRID_LENGTH);
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
      {array.map((el, i) => (
        <Grid
          key={el.id}
          item
          className={clsx(classes.grid, greedStyle(i))}
        >
          <Button
            onClick={() => handleButtonOnClick(el.id)}
            className={clsx(classes.button)}
          >
            {null}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
