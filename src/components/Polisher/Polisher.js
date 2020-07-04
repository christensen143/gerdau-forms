import React, { useContext, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';
import { Form, Table } from 'react-bootstrap';

import LoaderButton from '../LoaderButton/LoaderButton';

import SuccessModal from '../../modals/SuccessModal/SuccessModal';

import uncheckRadios from '../../helpers/uncheckRadios';

import { AuthContext } from '../../context/AuthContext';

import './Polisher.css';

const Polisher = () => {
  const { user } = useContext(AuthContext);
  const [operator, setOperator] = useState('');
  const [shift, setShift] = useState('');
  const [greenMileFloorSurfaces, setGreenMileFloorSurfaces] = useState('');
  const [machineGuarding, setMachineGuarding] = useState('');
  const [handTools, setHandTools] = useState('');
  const [airWands, setAirWands] = useState('');
  const [powerTools, setPowerTools] = useState('');
  const [electricalCords, setElectricalCords] = useState('');
  const [electricalCabinets, setElectricalCabinets] = useState('');
  const [pwhgLines, setPwhgLines] = useState('');
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
      powerTools &&
      electricalCords &&
      electricalCabinets &&
      pwhgLines &&
      flammableLiquids
    );
  };

  const handlePolisherForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    firestore
      .collection('Polisher')
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
        'Power Tools': powerTools,
        'Electrical Cords': electricalCords,
        'Electrical Cabinets': electricalCabinets,
        'Pneumatic, Water, Hydraulic, and Gas Lines': pwhgLines,
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
        setPowerTools('');
        setElectricalCords('');
        setElectricalCabinets('');
        setPwhgLines('');
        setFlammableLiquids('');
        setIsSubmitting(false);
        uncheckRadios(1, 36);
      });
  };

  return (
    <>
      <div className="Polisher p-4">
        <form onSubmit={handlePolisherForm}>
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
                  <td>
                    <Form.Label>Green Mile & Floor Surfaces</Form.Label>
                  </td>
                  <td>
                    <p>Walkways are clean, dry, & clear of hazards.</p>
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="greenMileFloorSurfaces"
                      id="radio1"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="greenMileFloorSurfaces"
                      id="radio2"
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
                      id="radio3"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="greenMileFloorSurfaces"
                      id="radio4"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Not applicable')
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Label>Machine Guarding</Form.Label>
                  </td>
                  <td>
                    <p>All guards are in place</p>
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="machineGuarding"
                      id="radio5"
                      onChange={() =>
                        setMachineGuarding('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="machineGuarding"
                      id="radio6"
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
                      id="radio7"
                      onChange={() =>
                        setMachineGuarding('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="machineGuarding"
                      id="radio8"
                      onChange={() => setMachineGuarding('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Label>Hand Tools</Form.Label>
                  </td>
                  <td>
                    <p>
                      All hand tools are in good condition and stored in proper
                      location
                    </p>
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="handTools"
                      id="radio9"
                      onChange={() => setHandTools('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="handTools"
                      id="radio10"
                      onChange={() =>
                        setHandTools('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="handTools"
                      id="radio11"
                      onChange={() => setHandTools('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="handTools"
                      id="radio12"
                      onChange={() => setHandTools('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Label>Air Wands</Form.Label>
                  </td>
                  <td>
                    <p>
                      All air wands are limited to 30psi and no leaks are
                      present.
                    </p>
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="airWands"
                      id="radio13"
                      onChange={() => setAirWands('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="airWands"
                      id="radio14"
                      onChange={() =>
                        setAirWands('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="airWands"
                      id="radio15"
                      onChange={() => setAirWands('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="airWands"
                      id="radio16"
                      onChange={() => setAirWands('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Label>Power Tools</Form.Label>
                  </td>
                  <td>
                    <p>
                      All power tools have guards in place and are in good
                      condition(i.e. Grinders, Strappers, & Tensioners)
                    </p>
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="powerTools"
                      id="radio17"
                      onChange={() => setPowerTools('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="powerTools"
                      id="radio18"
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
                      id="radio19"
                      onChange={() => setPowerTools('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="powerTools"
                      id="radio20"
                      onChange={() => setPowerTools('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Label>Electrical Cords</Form.Label>
                  </td>
                  <td>
                    <p>
                      Extension cords and power cords are free of cuts, tears,
                      and don't create trip hazards.
                    </p>
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="electricalCords"
                      id="radio21"
                      onChange={() =>
                        setElectricalCords('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="electricalCords"
                      id="radio22"
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
                      id="radio23"
                      onChange={() =>
                        setElectricalCords('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="electricalCords"
                      id="radio24"
                      onChange={() => setElectricalCords('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    <Form.Label>Electrical Cabinets</Form.Label>
                  </td>
                  <td>
                    <p>
                      All electrical cabinet doors are closed and secured. Any
                      damaged electrical cabinets must be reported to the
                      facilitator.
                    </p>
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="electricalCabinets"
                      id="radio25"
                      onChange={() =>
                        setElectricalCabinets('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="electricalCabinets"
                      id="radio26"
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
                      id="radio27"
                      onChange={() =>
                        setElectricalCabinets('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="electricalCabinets"
                      id="radio28"
                      onChange={() => setElectricalCabinets('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Label>
                      Pneumatic, Water, Hydraulic, and Gas Lines
                    </Form.Label>
                  </td>
                  <td>
                    {' '}
                    <p>
                      All pneumatic, hydraulic, water, & gas lines are located
                      on a hose reel or are properly plumbed and are not left on
                      the floor creating a trip hazard.
                    </p>
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="pwhgLines"
                      id="radio29"
                      onChange={() => setPwhgLines('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="pwhgLines"
                      id="radio30"
                      onChange={() =>
                        setPwhgLines('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="pwhgLines"
                      id="radio31"
                      onChange={() => setPwhgLines('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="pwhgLines"
                      id="radio32"
                      onChange={() => setPwhgLines('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Label>Flammable Liquids</Form.Label>
                  </td>
                  <td>
                    <p>
                      All aerosol cans and other flammable liquids are properly
                      stored in flammable cabinets.
                    </p>
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="flammableLiquids"
                      id="radio33"
                      onChange={() =>
                        setFlammableLiquids('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="flammableLiquids"
                      id="radio34"
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
                      id="radio35"
                      onChange={() =>
                        setFlammableLiquids('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="flammableLiquids"
                      id="radio36"
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

export default Polisher;
