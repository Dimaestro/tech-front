import React from 'react';
import './App.css';
import Home from '../home';
import LoginPage from "../auth/login";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "../../Utils/router/privateRoute";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
