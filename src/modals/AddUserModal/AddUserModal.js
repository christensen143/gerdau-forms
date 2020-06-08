import React, { useState } from 'react';

import { Alert, Form, Modal } from 'react-bootstrap';

import LoaderButton from '../../components/LoaderButton/LoaderButton';
import { auth } from 'firebase';
import { generateUserDocument } from '../../utils/firebase';

const AddUserModal = (props) => {
  const { showModal, closeModal } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  const handleAddUser = async (e, email, password) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
      setSuccess(true);
    } catch (error) {
      setErrorMessage('Error adding new user');
      setError(true);
    }

    setEmail('');
    setPassword('');
    setDisplayName('');
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsCancelling(true);
    closeModal();
    setIsCancelling(false);
  };

  return (
    <div>
      <Modal
        show={showModal}
        onHide={closeModal}
        dialogClassName="AddUserModal"
        aria-labelledby="Add User Modal"
      >
        <Modal.Header closeButton>
          <div className="icon-box">
            <i className="material-icons">add</i>
          </div>
          <h4 className="modal-title">Add New User</h4>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-4">
            <Form.Group controlId="vendor">
              <Form.Label>
                Display Name: <span className="required">(Required)</span>
              </Form.Label>

              <Form.Control
                required
                type="text"
                value={displayName}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="acrsSftpPath">
              <Form.Label>
                Email: <span className="required">(Required)</span>
              </Form.Label>

              <Form.Control
                required
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="apsSftpPath">
              <Form.Label>
                Password: <span className="required">(Required)</span>
              </Form.Label>

              <Form.Control
                required
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-center">
            <LoaderButton
              type="submit"
              isLoading={isAdding}
              text="Add User"
              loadingText=" Adding user..."
              onClick={handleAddUser}
            />{' '}
            <LoaderButton
              type="submit"
              isLoading={isCancelling}
              text="Cancel"
              loadingText=" Cancelling..."
              variant="outline-secondary"
              onClick={handleCancel}
            />
          </div>
          {success && (
            <Alert variant="success">
              <p>New user has been successfully added!</p>
            </Alert>
          )}
          {error && <Alert variant="danger">{errorMessage}</Alert>}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddUserModal;
