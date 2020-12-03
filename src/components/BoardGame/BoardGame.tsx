import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid, Button } from '@material-ui/core';

type StylesProps = {
  grid: number,
};

const useStyles = makeStyles<Theme, StylesProps>((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    width: 'calc(100vw - 24px * 2)',
    height: 'calc(100vw - 24px * 2)',
    margin: '0 auto',
  },
  grid: {
    margin: 0,
    padding: 0,
    width: props => `${100 / props.grid}%`,
    height: props => `${100 / props.grid}%`,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    minWidth: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '5px',
    backgroundColor: 'rgb(245, 171, 53)',
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
    borderStyle: 'outset',
  },
}));

const GRID_LENGTH = 9;
const array = new Array(GRID_LENGTH * GRID_LENGTH).fill(0).map((el, i) => ({ id: i }));

export default function BoardGame() {
  const classes = useStyles({ grid: GRID_LENGTH } as StylesProps);

  function handleButtonOnClick(index: number) {
    console.log(index);
  }

  return (
    <Grid container className={classes.root}>
      {array.map((el) => (
        <Grid
          key={el.id}
          item
          className={classes.grid}
        >
          <Button
            onClick={() => handleButtonOnClick(el.id)}
            className={classes.button}
          >
            {el.id + 1}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
