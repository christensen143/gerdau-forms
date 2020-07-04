import React, { useContext, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';

import { Col, Form, Row } from 'react-bootstrap';

import LoaderButton from '../LoaderButton/LoaderButton';

import SuccessModal from '../../modals/SuccessModal/SuccessModal';

import { AuthContext } from '../../context/AuthContext';

import uncheckRadios from '../../helpers/uncheckRadios';

import './GageRecords.css';

const GageRecords = () => {
  const { user } = useContext(AuthContext);
  const [type, setType] = useState('');
  const [operator, setOperator] = useState('');
  const [gageNumber, setGageNumber] = useState('');
  const [actReadings, setActReadings] = useState('');
  const [stdBlockId, setStdBlockId] = useState('');
  const [pass, setPass] = useState('');
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

  const validateForm = () => {
    return (
      type !== '' &&
      operator !== '' &&
      gageNumber !== '' &&
      actReadings !== '' &&
      stdBlockId !== ''
    );
  };

  const handleGrForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    firestore
      .collection('Gage Records')
      .add({
        Date: date,
        Type: type,
        'Gage Number': gageNumber,
        'Act. Readings': actReadings,
        'Std./Block ID': stdBlockId,
        Pass: pass,
        Comments: comments,
        User: user.displayName,
      })
      .then(() => {
        setShowSuccessModal(true);
        uncheckRadios(1, 2);
        setIsSubmitting(false);
        setType('');
        setOperator('');
        setGageNumber('');
        setActReadings('');
        setStdBlockId('');
        setPass('');
        setComments('');
      });
  };

  return (
    <>
      <div>
        <form className="meiForm p-4" onSubmit={handleGrForm}>
          <fieldset>
            <Form.Group controlId="type" className="mb-4">
              <Form.Label>Choose Type:</Form.Label>

              <Form.Control
                as="select"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option>Choose...</option>
                <option>11P-7A</option>
                <option>7A-3P</option>
                <option>3P-11P</option>
              </Form.Control>
            </Form.Group>
          </fieldset>
          <hr />
          <fieldset>
            <Form.Group controlId="operator">
              <Form.Label>Operator:</Form.Label>
              <Form.Control
                type="text"
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="gageNumber">
              <Form.Label>Gage #:</Form.Label>
              <Form.Control
                type="text"
                value={gageNumber}
                onChange={(e) => setGageNumber(e.target.value)}
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
            <Form.Group controlId="stdBlockId">
              <Form.Label>Std./Block ID:</Form.Label>
              <Form.Control
                type="text"
                value={stdBlockId}
                onChange={(e) => setStdBlockId(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Pass
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="Pass"
                  id="radio1"
                  onChange={() => setPass('Yes')}
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="Pass"
                  id="radio2"
                  onChange={() => setPass('No')}
                />
              </Col>
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

export default GageRecords;
