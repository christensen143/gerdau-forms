import React, { useContext, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';
import { Form, Table } from 'react-bootstrap';

import LoaderButton from '../LoaderButton/LoaderButton';

import SuccessModal from '../../modals/SuccessModal/SuccessModal';

import uncheckRadios from '../../helpers/uncheckRadios';

import { AuthContext } from '../../context/AuthContext';

import './Turners.css';

const Turners = () => {
  const { user } = useContext(AuthContext);
  const [operator, setOperator] = useState('');
  const [shift, setShift] = useState('');
  const [greenMileFloorSurfaces, setGreenMileFloorSurfaces] = useState('');
  const [machineGuarding, setMachineGuarding] = useState('');
  const [handTools, setHandTools] = useState('');
  const [airWands, setAirWands] = useState('');
  const [grinders, setGrinders] = useState('');
  const [safetyBar, setSafetyBar] = useState('');
  const [flammableLiquids, setFlammableLiquids] = useState('');
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

  const validateForm = () => {
    return (
      operator &&
      shift &&
      greenMileFloorSurfaces &&
      machineGuarding &&
      handTools &&
      airWands &&
      grinders &&
      safetyBar &&
      flammableLiquids
    );
  };

  const handleTurnersForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    firestore
      .collection('Turners')
      .add({
        Date: date,
        User: user.displayName,
        Operator: operator,
        Shift: shift,
        Comments: comments,
        'Green Mile & Floor Surfaces': greenMileFloorSurfaces,
        'Machine Guarding': machineGuarding,
        'Hand Tools': handTools,
        'Air Wands': airWands,
        Grinders: grinders,
        'Safety Bar (Carriage Unit)': safetyBar,
        'Flammable Liquids': flammableLiquids,
      })
      .then(() => {
        setShowSuccessModal(true);
        setOperator('');
        setShift('');
        setComments('');
        setGreenMileFloorSurfaces('');
        setMachineGuarding('');
        setHandTools('');
        setAirWands('');
        setGrinders('');
        setSafetyBar('');
        setFlammableLiquids('');
        setIsSubmitting(false);
        uncheckRadios(37, 64);
      });
  };

  return (
    <>
      <div className="Turners p-4">
        <form onSubmit={handleTurnersForm}>
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
                  <td className="text-center font-weight-bold" colSpan="3">
                    Control Station Area
                  </td>
                </tr>
                <tr>
                  <td>Machine Guarding</td>
                  <td>All guards are in place</td>
                  <td>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        label="Inspection not performed"
                        name="machineGuarding"
                        id="radio37"
                        onChange={() =>
                          setMachineGuarding('Inspection not performed')
                        }
                      />
                      <Form.Check
                        type="radio"
                        label="Out of acceptable range - Unsatisfactory"
                        name="machineGuarding"
                        id="radio38"
                        onChange={() =>
                          setMachineGuarding(
                            'Out of acceptable range - Unsatisfactory'
                          )
                        }
                      />
                      <Form.Check
                        type="radio"
                        label="Inspection satisfactory"
                        name="machineGuarding"
                        id="radio39"
                        onChange={() =>
                          setMachineGuarding('Inspection satisfactory')
                        }
                      />
                      <Form.Check
                        type="radio"
                        label="Not applicable"
                        name="machineGuarding"
                        id="radio40"
                        onChange={() => setMachineGuarding('Not applicable')}
                      />
                    </Form.Group>
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
                      id="radio41"
                      onChange={() => setHandTools('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="handTools"
                      id="radio42"
                      onChange={() =>
                        setHandTools('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="handTools"
                      id="radio43"
                      onChange={() => setHandTools('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="handTools"
                      id="radio44"
                      onChange={() => setHandTools('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Air Wands</td>
                  <td>
                    All air wands are limited to 30psi and no leaks are present.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="airWands"
                      id="radio45"
                      onChange={() => setAirWands('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="airWands"
                      id="radio46"
                      onChange={() =>
                        setAirWands('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="airWands"
                      id="radio47"
                      onChange={() => setAirWands('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="airWands"
                      id="radio48"
                      onChange={() => setAirWands('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Grinders</td>
                  <td>
                    All grinders have a blade protection guard and cords are in
                    good condition. Ensure the wheel is not chipped, cracked,
                    damaged, or unsecured.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="grinders"
                      id="radio49"
                      onChange={() => setGrinders('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="grinders"
                      id="radio50"
                      onChange={() =>
                        setGrinders('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="grinders"
                      id="radio51"
                      onChange={() => setGrinders('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="grinders"
                      id="radio52"
                      onChange={() => setGrinders('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Safety Bar (Carriage Unit)</td>
                  <td>
                    The safety bar, located at the Turner carriage unit, is
                    funcitoning properly and will shutdown the equpment properly
                    when engaged.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="safetyBar"
                      id="radio53"
                      onChange={() => setSafetyBar('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="safetyBar"
                      id="radio54"
                      onChange={() =>
                        setSafetyBar('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="safetyBar"
                      id="radio55"
                      onChange={() => setSafetyBar('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="safetyBar"
                      id="radio56"
                      onChange={() => setSafetyBar('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-weight-bold" colSpan="3">
                    Change End of the Turner
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
                      id="radio57"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="greenMileFloorSurfaces"
                      id="radio58"
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
                      id="radio59"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="greenMileFloorSurfaces"
                      id="radio60"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Not applicable')
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Flammable Liquids</td>
                  <td>
                    All aerosol cans and other flammable liquids are properly
                    stored in flammable cabinets.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="flammableLiquids"
                      id="radio61"
                      onChange={() =>
                        setFlammableLiquids('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="flammableLiquids"
                      id="radio62"
                      onChange={() =>
                        setFlammableLiquids(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="flammableLiquids"
                      id="radio63"
                      onChange={() =>
                        setFlammableLiquids('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="flammableLiquids"
                      id="radio64"
                      onChange={() => setFlammableLiquids('Not applicable')}
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

export default Turners;
