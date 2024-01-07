import React, {JSX} from 'react';
import {NavLink} from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>This is Home page</h1>
      <NavLink to={'/login'}>
        login
      </NavLink>
    </div>
  );
};

export default Home;
