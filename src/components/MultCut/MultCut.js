import React, { useContext, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';
import { Form, Table } from 'react-bootstrap';

import LoaderButton from '../LoaderButton/LoaderButton';

import SuccessModal from '../../modals/SuccessModal/SuccessModal';

import uncheckRadios from '../../helpers/uncheckRadios';

import { AuthContext } from '../../context/AuthContext';

import './MultCut.css';

const MultCut = () => {
  const { user } = useContext(AuthContext);
  const [operator, setOperator] = useState('');
  const [shift, setShift] = useState('');
  const [greenMileFloorSurfaces, setGreenMileFloorSurfaces] = useState('');
  const [machineGuarding, setMachineGuarding] = useState('');
  const [interlockedRoboticGates, setInterlockedRoboticGates] = useState('');
  const [airWands, setAirWands] = useState('');
  const [electricalCords, setElectricalCords] = useState('');
  const [electricalCabinets, setElectricalCabinets] = useState('');
  const [pwhLines, setPwhLines] = useState('');
  const [
    pendentControlledCraneControls,
    setPendentControlledCraneControls,
  ] = useState('');
  const [forkliftOperation, setForkliftOperation] = useState('');
  const [fireExtinguishers, setFireExtinguishers] = useState('');
  const [floorScrubber, setFloorScrubber] = useState('');
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
      interlockedRoboticGates &&
      airWands &&
      pendentControlledCraneControls &&
      electricalCords &&
      electricalCabinets &&
      pwhLines &&
      forkliftOperation &&
      fireExtinguishers &&
      floorScrubber
    );
  };

  const handleMultCutForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    firestore
      .collection('MultCut')
      .add({
        Date: date,
        User: user.displayName,
        Operator: operator,
        Shift: shift,
        Comments: comments,
        'Green Mile & Floor Surfaces': greenMileFloorSurfaces,
        'Machine Guarding': machineGuarding,
        'Interlocked Robotic Gates': interlockedRoboticGates,
        'Air Wands': airWands,
        'Pendent Controlled Crane Controls': pendentControlledCraneControls,
        'Electrical Cords': electricalCords,
        'Electrical Cabinets': electricalCabinets,
        'Pneumatic, Water, and Hydraulic Lines': pwhLines,
        'Fire Extinguishers': fireExtinguishers,
        'Forklift Operation': forkliftOperation,
        'Floor Scrubber': floorScrubber,
      })
      .then(() => {
        setShowSuccessModal(true);
        setOperator('');
        setShift('');
        setComments('');
        setGreenMileFloorSurfaces('');
        setMachineGuarding('');
        setInterlockedRoboticGates('');
        setAirWands('');
        setPendentControlledCraneControls('');
        setElectricalCords('');
        setElectricalCabinets('');
        setPwhLines('');
        setFireExtinguishers('');
        setForkliftOperation('');
        setIsSubmitting(false);
        setFloorScrubber('');
        uncheckRadios(141, 184);
      });
  };

  return (
    <>
      <div className="MultCut p-4">
        <form onSubmit={handleMultCutForm}>
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
                  <td>Green Mile & Floor Surfaces</td>
                  <td>Walkways are clean, dry, & clear of hazards.</td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="greenMileFloorSurfaces"
                      id="radio141"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="greenMileFloorSurfaces"
                      id="radio142"
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
                      id="radio143"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="greenMileFloorSurfaces"
                      id="radio144"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Not applicable')
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Floor Scrubber</td>
                  <td>
                    The floor scrubber is operational, in good condition, and
                    utilized to eliminate slippery surfaces around equipment.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="floorScrubber"
                      id="radio145"
                      onChange={() =>
                        setFloorScrubber('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="floorScrubber"
                      id="radio146"
                      onChange={() =>
                        setFloorScrubber(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="floorScrubber"
                      id="radio147"
                      onChange={() =>
                        setFloorScrubber('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="floorScrubber"
                      id="radio148"
                      onChange={() => setFloorScrubber('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Machine Guarding</td>
                  <td>All guards are in place</td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="machineGuarding"
                      id="radio149"
                      onChange={() =>
                        setMachineGuarding('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="machineGuarding"
                      id="radio150"
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
                      id="radio151"
                      onChange={() =>
                        setMachineGuarding('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="machineGuarding"
                      id="radio152"
                      onChange={() => setMachineGuarding('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Interlocked Robotic Gates</td>
                  <td>
                    All interlocked gates are functioning properly and stop the
                    movement of robotic equipment when the gate is opened.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="interlockedRoboticGates"
                      id="radio153"
                      onChange={() =>
                        setInterlockedRoboticGates('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="interlockedRoboticGates"
                      id="radio154"
                      onChange={() =>
                        setInterlockedRoboticGates(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="interlockedRoboticGates"
                      id="radio155"
                      onChange={() =>
                        setInterlockedRoboticGates('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="interlockedRoboticGates"
                      id="radio156"
                      onChange={() =>
                        setInterlockedRoboticGates('Not applicable')
                      }
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
                      id="radio157"
                      onChange={() => setAirWands('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="airWands"
                      id="radio158"
                      onChange={() =>
                        setAirWands('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="airWands"
                      id="radio159"
                      onChange={() => setAirWands('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="airWands"
                      id="radio160"
                      onChange={() => setAirWands('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Electrical Cords</td>
                  <td>
                    Extension cords and power cords are free of cuts, tears, and
                    don't create trip hazards.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="electricalCords"
                      id="radio161"
                      onChange={() =>
                        setElectricalCords('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="electricalCords"
                      id="radio162"
                      onChange={() =>
                        setElectricalCords(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="electricalCords"
                      id="radio163"
                      onChange={() =>
                        setElectricalCords('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="electricalCords"
                      id="radio164"
                      onChange={() => setElectricalCords('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Electrical Cabinets</td>
                  <td>
                    All electrical cabinet doors are closed and secured. Any
                    damaged electrical cabinets must be reported to the
                    facilitator.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="electricalCabinets"
                      id="radio165"
                      onChange={() =>
                        setElectricalCabinets('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="electricalCabinets"
                      id="radio166"
                      onChange={() =>
                        setElectricalCabinets(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="electricalCabinets"
                      id="radio167"
                      onChange={() =>
                        setElectricalCabinets('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="electricalCabinets"
                      id="radio168"
                      onChange={() => setElectricalCabinets('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Pneumatic, Water, and Hydraulic Lines</td>
                  <td>
                    All pneumatic, hydraulic, & water lines are located on a
                    hose reel or are properly plumbed and are not left on the
                    floor creating a trip hazard.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="pwhLines"
                      id="radio169"
                      onChange={() => setPwhLines('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="pwhLines"
                      id="radio170"
                      onChange={() =>
                        setPwhLines('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="pwhLines"
                      id="radio171"
                      onChange={() => setPwhLines('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="pwhLines"
                      id="radio172"
                      onChange={() => setPwhLines('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Pendent Controlled Crane Controls</td>
                  <td>
                    The crane control pendent is properly labeled for cuntion &
                    direction. The preuse inspection of the crane has been
                    filled out and any deficiencies have been communicated to
                    department supervision.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="pendentControlledCraneControls"
                      id="radio173"
                      onChange={() =>
                        setPendentControlledCraneControls(
                          'Inspection not performed'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="pendentControlledCraneControls"
                      id="radio174"
                      onChange={() =>
                        setPendentControlledCraneControls(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="pendentControlledCraneControls"
                      id="radio175"
                      onChange={() =>
                        setPendentControlledCraneControls(
                          'Inspection satisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="pendentControlledCraneControls"
                      id="radio176"
                      onChange={() =>
                        setPendentControlledCraneControls('Not applicable')
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Forklift Operation</td>
                  <td>
                    All forklifts have been fully inspected and inspection
                    sheets turned in identifying all unsafe conditions.
                    Seatbelts are properly utilized during operation.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="forkliftOperation"
                      id="radio177"
                      onChange={() =>
                        setForkliftOperation('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="forkliftOperation"
                      id="radio178"
                      onChange={() =>
                        setForkliftOperation(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="forkliftOperation"
                      id="radio179"
                      onChange={() =>
                        setForkliftOperation('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="forkliftOperation"
                      id="radio180"
                      onChange={() => setForkliftOperation('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Fire Extinguishers</td>
                  <td>
                    Are mounted in designated locations and identified &
                    available for use when needed.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="fireExtinguishers"
                      id="radio181"
                      onChange={() =>
                        setFireExtinguishers('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="fireExtinguishers"
                      id="radio182"
                      onChange={() =>
                        setFireExtinguishers(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="fireExtinguishers"
                      id="radio183"
                      onChange={() =>
                        setFireExtinguishers('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="fireExtinguishers"
                      id="radio184"
                      onChange={() => setFireExtinguishers('Not applicable')}
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

export default MultCut;
