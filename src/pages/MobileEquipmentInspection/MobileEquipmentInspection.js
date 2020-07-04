import React, { useContext, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';
import { Col, Container, Form, Row } from 'react-bootstrap';

import SuccessModal from '../../modals/SuccessModal/SuccessModal';

import LoaderButton from '../../components/LoaderButton/LoaderButton';

import { AuthContext } from '../../context/AuthContext';

import uncheckRadios from '../../helpers/uncheckRadios';

import './MobileEquipmentInspection.css';

const MobileEquipmentInspection = () => {
  const { user } = useContext(AuthContext);
  const [shift, setShift] = useState('');
  const [serviceBrakes, setServiceBrakes] = useState('');
  const [mastChains, setMastChains] = useState('');
  const [fuelSystemLeaks, setFuelSystemLeaks] = useState('');
  const [hornStrobeLight, setHornStrobeLight] = useState('');
  const [oilLeaks, setOilLeaks] = useState('');
  const [steeringPlay, setSteeringPlay] = useState('');
  const [ltsControls, setLtsControls] = useState('');
  const [tireWheelCondition, setTireWheelCondition] = useState('');
  const [lights, setLights] = useState('');
  const [parkingBrake, setParkingBrake] = useState('');
  const [overheadGuardForksBackrest, setOverheadGuardForksBackrest] = useState(
    ''
  );
  const [operatorComments, setOperatorComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

  const validateForm = () => {
    return shift !== '';
  };

  const handleMeiForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    firestore
      .collection('Mobile Equipment Inspection')
      .add({
        Date: date,
        Shift: shift,
        'Service Brakes': serviceBrakes,
        'Mast & Chains': mastChains,
        'Fuel System Leaks': fuelSystemLeaks,
        'Horn & Strobe Light': hornStrobeLight,
        'Oil Leaks': oilLeaks,
        'Steering Play': steeringPlay,
        'Lift Control, Tilt, Side Shift Controls': ltsControls,
        'Tire/Wheel Condition': tireWheelCondition,
        'Lights (forward, backup, brake)': lights,
        'Parking Brake': parkingBrake,
        'Overhead Guard, Forks, and Backrest': overheadGuardForksBackrest,
        'Operator Comments': operatorComments,
        User: user.email,
      })
      .then(() => {
        setShowSuccessModal(true);
        setShift('');
        setServiceBrakes('');
        setMastChains('');
        setFuelSystemLeaks('');
        setHornStrobeLight('');
        setOilLeaks('');
        setSteeringPlay('');
        setLtsControls('');
        setTireWheelCondition('');
        setLights('');
        setParkingBrake('');
        setOverheadGuardForksBackrest('');
        setOperatorComments('');
        uncheckRadios(1, 22);

        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Container>
        <div className="meiForm p-4">
          <h3>Mobile Equipment Inspection</h3>
          <form onSubmit={handleMeiForm}>
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
            <hr />
            <fieldset>
              <p>
                An "NR" will result in the forklift being immediately taken out
                of service until repairs can be made.
              </p>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Service Brakes
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="ServiceBrakes"
                    id="radio1"
                    onChange={() => setServiceBrakes('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="ServiceBrakes"
                    id="radio2"
                    onChange={() => setServiceBrakes('√')}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Mast & Chains
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="MastChains"
                    id="radio3"
                    onChange={() => setMastChains('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="MastChains"
                    id="radio4"
                    onChange={() => setMastChains('√')}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Fuel System Leaks
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="FuelSystemLeaks"
                    id="radio5"
                    onChange={() => setFuelSystemLeaks('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="FuelSystemLeaks"
                    id="radio6"
                    onChange={() => setFuelSystemLeaks('√')}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Horn & Strobe Light
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="HornStrobeLight"
                    id="radio7"
                    onChange={() => setHornStrobeLight('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="HornStrobeLight"
                    id="radio8"
                    onChange={() => setHornStrobeLight('√')}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <hr />
            <fieldset>
              <p>
                An "NR" will result in the forklift being immediately taken out
                of service if the problem is excessive. The forklift will remain
                out of service until repairs are made.
              </p>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Oil Leaks (if excessive take out of service)
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="OilLeaks"
                    id="radio9"
                    onChange={() => setOilLeaks('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="OilLeaks"
                    id="radio10"
                    onChange={() => setOilLeaks('√')}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Steering Play
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="SteeringPlay"
                    id="radio11"
                    onChange={() => setSteeringPlay('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="SteeringPlay"
                    id="radio12"
                    onChange={() => setSteeringPlay('√')}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Lift Control, Tilt, Side Shift Controls
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="LtsControls"
                    id="radio13"
                    onChange={() => setLtsControls('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="LtsControls"
                    id="radio14"
                    onChange={() => setLtsControls('√')}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Tire/Wheel Condition
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="TireWheelCondition"
                    id="radio15"
                    onChange={() => setTireWheelCondition('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="TireWheelCondition"
                    id="radio16"
                    onChange={() => setTireWheelCondition('√')}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Lights (forward, backup, brake)
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="Lights"
                    id="radio17"
                    onChange={() => setLights('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="Lights"
                    id="radio18"
                    onChange={() => setLights('√')}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Parking Brake
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="ParkingBrake"
                    id="radio19"
                    onChange={() => setParkingBrake('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="ParkingBrake"
                    id="radio20"
                    onChange={() => setParkingBrake('√')}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Overhead Guard, Forks, and Backrest
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="NR"
                    name="OverheadGuardForksBackrest"
                    id="radio21"
                    onChange={() => setOverheadGuardForksBackrest('NR')}
                  />
                  <Form.Check
                    type="radio"
                    label="√"
                    name="OverheadGuardForksBackrest"
                    id="radio22"
                    onChange={() => setOverheadGuardForksBackrest('√')}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <fieldset className="operatorComments">
              <Form.Group controlId="operatorComments">
                <Form.Label>Operator Comments:</Form.Label>
                <Form.Control
                  as="textarea"
                  value={operatorComments}
                  rows="8"
                  onChange={(e) => setOperatorComments(e.target.value)}
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
      </Container>
      <SuccessModal
        showModal={showSuccessModal}
        hideModal={() => setShowSuccessModal(false)}
      />
    </>
  );
};

export default MobileEquipmentInspection;
