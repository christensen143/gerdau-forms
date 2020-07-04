import React, { useContext, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';
import { Form, Table } from 'react-bootstrap';

import LoaderButton from '../LoaderButton/LoaderButton';

import SuccessModal from '../../modals/SuccessModal/SuccessModal';

import uncheckRadios from '../../helpers/uncheckRadios';

import { AuthContext } from '../../context/AuthContext';

import './Straightener.css';

const Straightener = () => {
  const { user } = useContext(AuthContext);
  const [operator, setOperator] = useState('');
  const [shift, setShift] = useState('');
  const [bandingHazards, setBandingHazards] = useState('');
  const [cranes, setCranes] = useState('');
  const [riggingChains, setRiggingChains] = useState('');
  const [fireExtinguishers, setFireExtinguishers] = useState('');
  const [lightCurtains, setLightCurtains] = useState('');
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
      flammableLiquids &&
      bandingHazards &&
      cranes &&
      riggingChains &&
      fireExtinguishers &&
      lightCurtains
    );
  };

  const handleStraightenerForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    firestore
      .collection('Straightener')
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
        'Banding Hazards': bandingHazards,
        Cranes: cranes,
        'Rigging (Chains)': riggingChains,
        'Fire Extinguishers': fireExtinguishers,
        'Light Curtains': lightCurtains,
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
        setBandingHazards('');
        setCranes('');
        setRiggingChains('');
        setFireExtinguishers('');
        setLightCurtains('');
        setIsSubmitting(false);
        uncheckRadios(65, 116);
      });
  };

  return (
    <>
      <div className="Straightener p-4">
        <form onSubmit={handleStraightenerForm}>
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
                    Banding stored in holders and not in walkway and cut
                    resistant gloves are utilized during handling.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="bandingHazards"
                      id="radio65"
                      onChange={() =>
                        setBandingHazards('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="bandingHazards"
                      id="radio66"
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
                      id="radio67"
                      onChange={() =>
                        setBandingHazards('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="bandingHazards"
                      id="radio68"
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
                      id="radio65"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="greenMileFloorSurfaces"
                      id="radio66"
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
                      id="radio67"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="greenMileFloorSurfaces"
                      id="radio68"
                      onChange={() =>
                        setGreenMileFloorSurfaces('Not applicable')
                      }
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
                      id="radio69"
                      onChange={() =>
                        setMachineGuarding('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="machineGuarding"
                      id="radio70"
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
                      id="radio71"
                      onChange={() =>
                        setMachineGuarding('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="machineGuarding"
                      id="radio72"
                      onChange={() => setMachineGuarding('Not applicable')}
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
                      id="radio73"
                      onChange={() => setHandTools('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="handTools"
                      id="radio74"
                      onChange={() =>
                        setHandTools('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="handTools"
                      id="radio75"
                      onChange={() => setHandTools('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="handTools"
                      id="radio76"
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
                      id="radio77"
                      onChange={() => setAirWands('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="airWands"
                      id="radio78"
                      onChange={() =>
                        setAirWands('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="airWands"
                      id="radio79"
                      onChange={() => setAirWands('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="airWands"
                      id="radio80"
                      onChange={() => setAirWands('Not applicable')}
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
                      id="radio81"
                      onChange={() => setPowerTools('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="powerTools"
                      id="radio82"
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
                      id="radio83"
                      onChange={() => setPowerTools('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="powerTools"
                      id="radio84"
                      onChange={() => setPowerTools('Not applicable')}
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
                      id="radio85"
                      onChange={() =>
                        setElectricalCords('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="electricalCords"
                      id="radio86"
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
                      id="radio87"
                      onChange={() =>
                        setElectricalCords('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="electricalCords"
                      id="radio88"
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
                      id="radio89"
                      onChange={() =>
                        setElectricalCabinets('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="electricalCabinets"
                      id="radio90"
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
                      id="radio91"
                      onChange={() =>
                        setElectricalCabinets('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="electricalCabinets"
                      id="radio92"
                      onChange={() => setElectricalCabinets('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Pneumatic, Water , Hydraulic , and Gas Lines</td>
                  <td>
                    All pneumatic, hydraulic, water, & gas lines are located on
                    a hose reel or are properly plumbed and are not left on the
                    floor creating a trip hazard.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="pwhgLines"
                      id="radio93"
                      onChange={() => setPwhgLines('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="pwhgLines"
                      id="radio94"
                      onChange={() =>
                        setPwhgLines('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="pwhgLines"
                      id="radio95"
                      onChange={() => setPwhgLines('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="pwhgLines"
                      id="radio96"
                      onChange={() => setPwhgLines('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Cranes</td>
                  <td>
                    All jib crane hooks have a safety latch that is in good
                    condition and functioning properly.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="cranes"
                      id="radio97"
                      onChange={() => setCranes('Inspection not performed')}
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="cranes"
                      id="radio98"
                      onChange={() =>
                        setCranes('Out of acceptable range - Unsatisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="cranes"
                      id="radio99"
                      onChange={() => setCranes('Inspection satisfactory')}
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="cranes"
                      id="radio100"
                      onChange={() => setCranes('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Rigging (Chains)</td>
                  <td>
                    Only chainsare used to load and unload the straightened
                    Chains must be stored properly when not in use. Chains have
                    been inspected for damage & stretching prior to use.
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="riggingChains"
                      id="radio101"
                      onChange={() =>
                        setRiggingChains('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="riggingChains"
                      id="radio102"
                      onChange={() =>
                        setRiggingChains(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="riggingChains"
                      id="radio103"
                      onChange={() =>
                        setRiggingChains('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="riggingChains"
                      id="radio104"
                      onChange={() => setRiggingChains('Not applicable')}
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
                      id="radio105"
                      onChange={() =>
                        setFlammableLiquids('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="flammableLiquids"
                      id="radio106"
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
                      id="radio107"
                      onChange={() =>
                        setFlammableLiquids('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="flammableLiquids"
                      id="radio108"
                      onChange={() => setFlammableLiquids('Not applicable')}
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
                      id="radio109"
                      onChange={() =>
                        setFireExtinguishers('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="fireExtinguishers"
                      id="radio110"
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
                      id="radio111"
                      onChange={() =>
                        setFireExtinguishers('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="fireExtinguishers"
                      id="radio112"
                      onChange={() => setFireExtinguishers('Not applicable')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Light Curtains</td>
                  <td>All light curtains are functioning properly.</td>
                  <td>
                    <Form.Check
                      type="radio"
                      label="Inspection not performed"
                      name="lightCurtains"
                      id="radio113"
                      onChange={() =>
                        setLightCurtains('Inspection not performed')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Out of acceptable range - Unsatisfactory"
                      name="lightCurtains"
                      id="radio114"
                      onChange={() =>
                        setLightCurtains(
                          'Out of acceptable range - Unsatisfactory'
                        )
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Inspection satisfactory"
                      name="lightCurtains"
                      id="radio115"
                      onChange={() =>
                        setLightCurtains('Inspection satisfactory')
                      }
                    />
                    <Form.Check
                      type="radio"
                      label="Not applicable"
                      name="lightCurtains"
                      id="radio116"
                      onChange={() => setLightCurtains('Not applicable')}
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

export default Straightener;
