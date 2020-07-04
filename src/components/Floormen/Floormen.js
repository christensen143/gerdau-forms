import React, { useContext, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';
import { Form, Table } from 'react-bootstrap';

import LoaderButton from '../LoaderButton/LoaderButton';

import SuccessModal from '../../modals/SuccessModal/SuccessModal';

import uncheckRadios from '../../helpers/uncheckRadios';

import { AuthContext } from '../../context/AuthContext';

import './Floormen.css';

const Floormen = () => {
  const { user } = useContext(AuthContext);
  const [operator, setOperator] = useState('');
  const [shift, setShift] = useState('');
  const [greenMileFloorSurfaces, setGreenMileFloorSurfaces] = useState('');
  const [bandingHazards, setBandingHazards] = useState('');
  const [handTools, setHandTools] = useState('');
  const [powerTools, setPowerTools] = useState('');
  const [bundleSawOperation, setBundleSawOperation] = useState('');
  const [hiltiGunUsage, setHiltiGunUsage] = useState('');
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

  const validateForm = () => {
    return (
      operator &&
      shift &&
      greenMileFloorSurfaces &&
      bandingHazards &&
      handTools &&
      bundleSawOperation &&
      powerTools &&
      hiltiGunUsage
    );
  };

  const handleFloormenForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    firestore
      .collection('Floormen')
      .add({
        Date: date,
        User: user.displayName,
        Operator: operator,
        Shift: shift,
        Comments: comments,
        'Green Mile & Floor Surfaces': greenMileFloorSurfaces,
        'Banding Hazards': bandingHazards,
        'Bundle Saw Operation': bundleSawOperation,
        'Hilti Gun Usage': hiltiGunUsage,
        'Power Tools': powerTools,
        'Hand Tools': handTools,
      })
      .then(() => {
        setShowSuccessModal(true);
        setOperator('');
        setShift('');
        setComments('');
        setGreenMileFloorSurfaces('');
        setBandingHazards('');
        setHandTools('');
        setHiltiGunUsage('');
        setPowerTools('');
        setBundleSawOperation('');
        setIsSubmitting(false);
        uncheckRadios(117, 140);
      });
  };

  return (
    <>
      <div className="Floormen p-4">
        <form onSubmit={handleFloormenForm}>
          <fieldset>
            <Form.Group controlId="operator">
              <Form.Label>Operator:</Form.Label>
              <Form.Control
                type="text"
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="shift" className="mb-4">
              <Form.Label>Choose Shift:</Form.Label>

              <Form.Control
                as="select"
                value={shift}
                onChange={(e) => {
                  setShift(e.target.value);
                }}
              >
                <option>Choose...</option>
                <option>M</option>
                <option>D</option>
                <option>A</option>
              </Form.Control>
            </Form.Group>
            <Table responsive>
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Components</th>
                  <th style={{ width: '37%' }}>Acceptable Range</th>
                  <th style={{ width: '33%' }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Banding Hazards</td>
                  <td>
                    Banding stored in holders on cart and not stored in the
                    walkway. Cut resistent gloves are utilized when performing
                    banding operations.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="bandingHazards"
                      id="radio117"
                      onChange={() =>
                        setBandingHazards('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="bandingHazards"
                      id="radio118"
                      onChange={() =>
                        setBandingHazards(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="bandingHazards"
                      id="radio119"
                      onChange={() =>
                        setBandingHazards('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="bandingHazards"
                      id="radio120"
                      onChange={() => setBandingHazards('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Green Mile & Floor Surfaces</td>
                  <td>Walkways are clean, dry, & clear of hazards.</td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="greenMileFloorSurfaces"
                      id="radio121"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="greenMileFloorSurfaces"
                      id="radio122"
                      onChange={() =>
                        setGreenMileFloorSurfaces(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="greenMileFloorSurfaces"
                      id="radio123"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="greenMileFloorSurfaces"
                      id="radio124"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Not applicable')
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Hand Tools</td>
                  <td>
                    All hand tools are in good condition and stored in proper
                    location
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="handTools"
                      id="radio125"
                      onChange={() => setHandTools('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="handTools"
                      id="radio126"
                      onChange={() =>
                        setHandTools('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="handTools"
                      id="radio127"
                      onChange={() => setHandTools('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="handTools"
                      id="radio128"
                      onChange={() => setHandTools('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Power Tools</td>
                  <td>
                    All power tools have guards in place and are in good
                    condition(i.e. Grinders, Strappers, & Tensioners)
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="powerTools"
                      id="radio129"
                      onChange={() => setPowerTools('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="powerTools"
                      id="radio130"
                      onChange={() =>
                        setPowerTools(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="powerTools"
                      id="radio131"
                      onChange={() => setPowerTools('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="powerTools"
                      id="radio132"
                      onChange={() => setPowerTools('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Bundle Saw Operation</td>
                  <td>
                    All operator controls are functioning properly. Guarding is
                    in place and properly secured. No trip hazards exist.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="bundleSawOperation"
                      id="radio133"
                      onChange={() =>
                        setBundleSawOperation('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="bundleSawOperation"
                      id="radio134"
                      onChange={() =>
                        setBundleSawOperation(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="bundleSawOperation"
                      id="radio135"
                      onChange={() =>
                        setBundleSawOperation('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="bundleSawOperation"
                      id="radio136"
                      onChange={() => setBundleSawOperation('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Hilti Gun Usage</td>
                  <td>
                    Equipment working properly, used blanks are placed in proper
                    containment drum, and unused stored properly in cabinet.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="hiltiGunUsage"
                      id="radio137"
                      onChange={() =>
                        setHiltiGunUsage('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="hiltiGunUsage"
                      id="radio138"
                      onChange={() =>
                        setHiltiGunUsage(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="hiltiGunUsage"
                      id="radio139"
                      onChange={() =>
                        setHiltiGunUsage('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="hiltiGunUsage"
                      id="radio140"
                      onChange={() => setHiltiGunUsage('Not applicable')}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
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

export default Floormen;
