import React from 'react';
import { NavLink } from "react-router-dom";
import Routes from '../../pages/Routes';
import Category from '../Category/Category';
import Search from '../Search/Search';
import './App.scss';


type AppProps = {
  title?: string;
};

function App(props: AppProps) {
  return (
    <div className="App">
      {props.title}
      <NavLink to={"/"}>
        <h1>Eat Delicious</h1>
      </NavLink>
      <Search />
      <Category />
      <Routes />
    </div>
  );
}

export default App;
