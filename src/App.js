import React from 'react';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

import Routes from './routing/Routes';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
