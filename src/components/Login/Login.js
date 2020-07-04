import React, { useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import { auth } from '../../utils/firebase';
import { Alert, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LoaderButton from '../../components/LoaderButton/LoaderButton';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function () {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch(function (error) {
        // Handle Errors here.
        setError(true);
        setErrorMessage(error.message);
      });

    // auth.signInWithEmailAndPassword(email, password).catch((error) => {
    //   setErrorMessage(
    //     'There was an error with your signin. Please check your email and password and try again.'
    //   );
    //   console.error(error);
    //   setError(true);
    // });
    setIsLoading(false);
  };

  return (
    <div className="Login">
      <form onSubmit={handleSignIn}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="off"
          />
        </Form.Group>
        <Link to="/login/reset">Forgot Password?</Link>
        <LoaderButton
          block
          // disabled={!validateForm()}
          type="submit"
          isLoading={isLoading}
          text="Login"
          loadingText=" Logging in..."
        />
      </form>
      {error && <Alert variant="danger">{errorMessage}</Alert>}
    </div>
  );
};

export default Login;

// export function LoginView({ onClick }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div>
//       <input
//         onChange={(e) => {
//           setUsername(e.target.value);
//         }}
//       />
//       <input
//         type="password"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           onClick(username, password);
//         }}
//       >
//         Login
//       </button>
//     </div>
//   );
// }

// export function LogoutView({ onClick }) {
//   return (
//     <div>
//       <span>You are logged in</span>
//       <button onClick={onClick}>Logout</button>
//     </div>
//   );
// }
