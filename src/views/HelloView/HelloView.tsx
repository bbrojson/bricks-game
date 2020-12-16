import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Divider,
  Container,
  Grid,
} from '@material-ui/core';
import {
  Link as RouterLink,
} from 'react-router-dom';

export default function HelloView() {
  const { t } = useTranslation();
  return (
    <header>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Button
              color="primary"
              component={RouterLink}
              to="/game"
            >
              {t('start new game')}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider light />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
