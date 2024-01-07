import React, {JSX} from 'react';
import './app.scss';
import Home from '../home';
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "../../Utils/router/privateRoute";
import AuthRootComponent from "../auth";


function App(): JSX.Element {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="login" element={<AuthRootComponent/>}/>
        <Route path="register" element={<AuthRootComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
