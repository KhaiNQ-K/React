import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../../../components/FormFields';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(45deg, #8b5aed 0%, #78ebfc 100%)',
  },
  box: {
    padding: theme.spacing(10),
    borderRadius: theme.spacing(2),
    boxShadow: '0 45px 63px rgba(0, 0, 0, 0.26)',
  },
}));

const intitalValues = {
  email: '',
  password: '',
};

function LoginPage() {
  const history = useHistory();
  const [isLogging, setIsLogging] = useState(false);
  const shema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email.')
      .matches(
        /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/gm,
        "Email don't match. Eg: yourEmail@gmail.com"
      ),
    password: yup.string().required('Please enter your password'),
  });
  const [error, setError] = useState('');
  const classes = useStyles();
  const { control, handleSubmit } = useForm({
    defaultValues: intitalValues,
    resolver: yupResolver(shema),
  });
  //logic

  const onChangeInput = (e) => {};

  const handleFormSubmit = () => {
    try {
      setError('');
      setIsLogging(true);
      setTimeout(() => {
        localStorage.setItem('access_token', '123231312');

        history.push('/admin');
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.box}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Typography variant="h5" component="h2">
            Login Page
          </Typography>
          <Box>
            <InputField
              control={control}
              name="email"
              label="Email"
              type="text"
              onChange={onChangeInput}
            />
            <InputField
              control={control}
              name="password"
              label="Password"
              type="password"
              onChange={onChangeInput}
            />
          </Box>
          <Box mt={3}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLogging}
            >
              {isLogging && <CircularProgress size={20} color="secondary" />}
              &nbsp;Save
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
}

export default LoginPage;
