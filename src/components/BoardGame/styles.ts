/* eslint-disable import/prefer-default-export */
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type StylesProps = {
  grid: number,
};

export const useStyles = makeStyles<Theme, StylesProps>((theme: Theme) => createStyles({
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
  brickEmptyLighter: {
    backgroundColor: '#461d0a',
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
