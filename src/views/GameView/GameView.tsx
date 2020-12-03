import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, Box } from '@material-ui/core';
import BoardGame from '../../components/BoardGame/BoardGame';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
}));

export default function GameView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box p={3} pr={0} pl={0}>
              <BoardGame />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
