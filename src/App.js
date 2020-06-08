import React, { useEffect, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

import Routes from './routing/Routes';

import { AuthProvider } from './context/AuthContext';

import useAuth from './custom-hooks/useAuth';

import './App.css';

const App = () => {
  const { initializing, user } = useAuth();
  const [idToken, setIdToken] = useState(null);

  useEffect(() => {
    if (user) {
      firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          setIdToken(idToken);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [user]);

  if (initializing) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user, idToken }}>
        <Header />
        <NavBar />
        <Routes />
      </AuthProvider>
    </div>
  );
};

export default App;
