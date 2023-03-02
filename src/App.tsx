import React from 'react';
import './App.scss';
import Pages from './pages/Pages';
import Category from './components/Category/Category';


type AppProps = {
  title?: string;
};

function App(props: AppProps) {
  return (<div className="App">{props.title}
    <h1>Delicious</h1>
    <Category />
    <Pages />
    
  </div>);
}

export default App;
