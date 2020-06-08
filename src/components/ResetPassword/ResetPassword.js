import React, { useState } from 'react';

import { auth } from '../../utils/firebase';
import { Alert, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LoaderButton from '../LoaderButton/LoaderButton';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateRequestForm = () => {
    return email !== '';
  };

  const handleResetEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Error resetting password');
        setError(true);
      });
    setIsLoading(false);
  };

  return (
    <div className="ResetPassword">
      <h3>Reset Password</h3>

      {/* Request form */}
      {!emailSent && (
        <>
          <form onSubmit={handleResetEmail}>
            <input type="hidden" value="something" />
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="new-password"
              />
            </Form.Group>
            <LoaderButton
              block
              type="submit"
              size="large"
              loadingText=" Sending..."
              text="Send Confirmation"
              isLoading={isLoading}
              disabled={!validateRequestForm}
            />
          </form>
          <Link
            to="/"
            className="my-2 text-blue-700 hover:text-blue-800 text-center block"
          >
            &larr; back to sign in page
          </Link>
        </>
      )}
      {emailSent && <p>An email has been sent to you!</p>}
      {error && <Alert variant="danger">{errorMessage}</Alert>}
    </div>
  );
};

export default ResetPassword;
