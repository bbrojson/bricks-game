import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

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
    margin: '-1px -1px 0 0',
    padding: 0,
    width: props => `calc(${100 / props.grid}% + 1px)`,
    height: props => `calc(${100 / props.grid}% + 1px)`,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    textIndent: '-1000px',
    margin: 0,
    padding: 0,
    minWidth: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  /* brick colors */
  brickEmpty: {
    backgroundColor: '#321001',
    border: '1px solid #000',
  },
  brickFull: {
    backgroundColor: '#efe3dc',
    borderColor: '#e2dc86',
    borderRadius: '2px',
    borderWidth: '2px',
    borderStyle: 'outset',
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
  },
  brickInLine: {
    backgroundColor: '#fffcfa',
    borderColor: '#fffcfa',
    borderRadius: '2px',
    borderWidth: '2px',
    borderStyle: 'outset',
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
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
          className={clsx(classes.grid, classes.brickEmpty)}
        >
          <Button
            onClick={() => handleButtonOnClick(el.id)}
            className={clsx(classes.button, el.id % 3 || classes.brickFull)}
          >
            {el.id + 1}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
