import React, { useContext, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';
import { Form } from 'react-bootstrap';

import LoaderButton from '../LoaderButton/LoaderButton';

import SuccessModal from '../../modals/SuccessModal/SuccessModal';

import { AuthContext } from '../../context/AuthContext';

import './BHNRecord.css';

const BHNRecord = () => {
  const { user } = useContext(AuthContext);
  const [operator, setOperator] = useState('');
  const [actReadings, setActReadings] = useState('');
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

  const validateForm = () => {
    return operator !== '' && actReadings !== '';
  };

  const handleBhnForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    firestore
      .collection('BHN Record')
      .add({
        Date: date,
        Operator: operator,
        'Act. Readings': actReadings,
        Comments: comments,
        User: user.displayName,
      })
      .then(() => {
        setShowSuccessModal(true);
        setOperator('');
        setActReadings('');
        setComments('');

        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="bhnRecord p-4">
        <form onSubmit={handleBhnForm}>
          <fieldset>
            <Form.Group controlId="operator">
              <Form.Label>Operator:</Form.Label>
              <Form.Control
                type="text"
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="actReadings">
              <Form.Label>Act Readings:</Form.Label>
              <Form.Control
                type="text"
                value={actReadings}
                onChange={(e) => setActReadings(e.target.value)}
              />
            </Form.Group>
          </fieldset>
          <hr />
          <fieldset className="operatorComments">
            <Form.Group controlId="operatorComments">
              <Form.Label>Comments:</Form.Label>
              <Form.Control
                as="textarea"
                value={comments}
                rows="8"
                onChange={(e) => setComments(e.target.value)}
              />
            </Form.Group>
          </fieldset>
          <hr />
          <fieldset>
            <LoaderButton
              type="submit"
              isLoading={isSubmitting}
              disabled={!validateForm()}
              text="Submit"
              loadingText=" Submitting..."
            />
          </fieldset>
        </form>
      </div>
      <SuccessModal
        showModal={showSuccessModal}
        hideModal={() => setShowSuccessModal(false)}
      />
    </>
  );
};

export default BHNRecord;
