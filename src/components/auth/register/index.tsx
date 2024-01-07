import React, {JSX} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {IPropsRegister} from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = ({setPassword, setUsername, setFirstName, setEmail}): JSX.Element => {
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
        Sign up
      </Typography>
      <TextField
        fullWidth={true}
        label="First name"
        variant="outlined"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <TextField
        fullWidth={true}
        label="User name"
        variant="outlined"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <TextField
        type='input'
        fullWidth={true}
        label="Email"
        variant="outlined"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        type='password'
        fullWidth={true}
        label="Password"
        variant="outlined"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        type='submit'
        variant="contained"
        size='large' sx={{fontFamily: 'Poppins', minWidth: '150px', marginTop: '24px'}}
      >
        Sign up
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
        Do you have an account?
        <NavLink to={'/login'} className='link'>
          Log in
        </NavLink>
      </Typography>
    </>
  );
};

export default RegisterPage;
