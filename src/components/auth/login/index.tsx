import React, {JSX} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLogin> = ({setEmail, setPassword}): JSX.Element => {

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        padding={3}
        fontFamily='Poppins'
        fontSize='clamp(32px, 5vw, 48px)'
        fontWeight={600}
        textAlign='center'
      >
        Log in
      </Typography>
      <TextField
        id='email'
        fullWidth={true}
        label="Email"
        variant="outlined"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <TextField
        id='password'
        type='password'
        fullWidth={true}
        label="Password"
        variant="outlined"
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <Button
        variant="contained"
        type='submit'
        size='large' sx={{fontFamily: 'Poppins', minWidth: '150px', marginTop: '24px'}}
      >
        Log in
      </Button>
      <Typography
        variant="body1"
        component="p"
        padding={3}
        fontFamily='Poppins'
        fontSize={16}
        fontWeight={500}
        textAlign='center'
      >
        Don't have an account?
        <NavLink to={'/register'} className='link'>
          Sign up
        </NavLink>
      </Typography>
    </>
  );
};

export default LoginPage;
