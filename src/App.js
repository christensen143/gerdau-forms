import React, { useEffect, useReducer, useRef, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import jwt from 'jwt-decode';
import Loader from 'react-loader-spinner';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

import Routes from './routing/Routes';

import { AuthProvider } from './context/AuthContext';

import useAuth from './custom-hooks/useAuth';

import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TM_ACTIVE_TAB':
      return {
        ...state,
        tmActiveTab: action.tmActiveTab,
      };
    case 'SET_EQ_ACTIVE_TAB':
      return {
        ...state,
        eqActiveTab: action.eqActiveTab,
      };
    case 'SET_FA_ACTIVE_TAB':
      return {
        ...state,
        faActiveTab: action.faActiveTab,
      };
    default:
      throw new Error('Action not found');
  }
};

const App = () => {
  const [data, dispatch] = useReducer(reducer, {
    faActiveTab: 'MeiTable',
    tmActiveTab: 'GageTable',
    eqActiveTab: 'PolisherTable',
  });
  const { initializing, user } = useAuth();
  const [idToken, setIdToken] = useState(null);
  const [role, setRole] = useState(null);

  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
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
    return () => (isMountedRef.current = false);
  }, [user, idToken]);

  useEffect(() => {
    isMountedRef.current = true;
    if (idToken) {
      const token = jwt(idToken);
      setRole(token.role);
    }

    return () => (isMountedRef.current = false);
  }, [idToken]);

  if (initializing) {
    return (
      <div
        style={{
          width: '100%',
          height: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader type="ThreeDots" color="#004a8f" height="80" width="80" />
      </div>
    );
  }

  return (
    <div className="App">
      <AuthProvider value={{ data, dispatch, user, idToken, role }}>
        <Header />
        <NavBar />
        <Routes />
      </AuthProvider>
    </div>
  );
};

export default App;
