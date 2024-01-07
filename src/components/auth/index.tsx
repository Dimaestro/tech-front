import React, {JSX, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import {Box} from "@mui/material";
import {instance} from "../../Utils/axios";
import {login} from "../../store/slice/auth";
import {useAppDispatch} from "../../Utils/hook";
import "./authRootComponent.scss";

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === '/login') {
      try {
        const userData = {
          email,
          password,
        }
        const user = await instance.post('/auth/login', userData);
        dispatch(login(user.data))
        navigate('/')
      } catch (e) {
        return e;
      }
    }

    if (location.pathname === '/register') {
      try {
        const userData = {
          email,
          password,
          firstName,
          username,
        }
        const user = await instance.post('/auth/register', userData);
        navigate('/login')
        console.log(user.data);
      } catch (e: any) {
        console.log(e.response.data.message)
        return e;
      }
    }
  }

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit} className='form'>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            gap={2}
            maxWidth={640}
            margin='auto'
            padding={5}
          >
            {location.pathname === "/login" ? <LoginPage setEmail={setEmail} setPassword={setPassword}/>
              : location.pathname === "/register" ?
                <RegisterPage setEmail={setEmail} setPassword={setPassword} setFirstName={setFirstName}
                              setUsername={setUsername}/>
                : null}
          </Box>
        </form>
      </div>
    </section>
  );
};

export default AuthRootComponent;
