import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export function Header() {
  const history = useHistory();
  const classes = useStyles();

  //logic

  const handleLogoutClick = () => {
    localStorage.removeItem('access_token');
    history.push('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Student Management
          </Typography>
          <Button color="inherit" onClick={handleLogoutClick}>
            Logut
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
