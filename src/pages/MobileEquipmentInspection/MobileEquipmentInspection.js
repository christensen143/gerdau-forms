import React, { useState } from 'react';

import { Col, Container, Form, Row } from 'react-bootstrap';

import LoaderButton from '../../components/LoaderButton/LoaderButton';

import './MobileEquipmentInspection.css';

const MobileEquipmentInspection = () => {
  const [shift, setShift] = useState('');
  const [serviceBrakes, setServiceBrakes] = useState('NR');
  const [mastChains, setMastChains] = useState('NR');
  const [fuelSystemLeaks, setFuelSystemLeaks] = useState('NR');
  const [hornStrobeLight, setHornStrobeLight] = useState('NR');
  const [oilLeaks, setOilLeaks] = useState('NR');
  const [steeringPlay, setSteeringPlay] = useState('NR');
  const [ltsControls, setLtsControls] = useState('NR');
  const [tireWheelCondition, setTireWheelCondition] = useState('NR');
  const [lights, setLights] = useState('NR');
  const [parkingBrake, setParkingBrake] = useState('NR');
  const [overheadGuardForksBackrest, setOverheadGuardForksBackrest] = useState(
    'NR'
  );
  const [operatorComments, setOperatorComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    return shift !== '';
  };

  const handleMeiForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log({
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
    });

    setIsSubmitting(false);
    setShift('');
    setServiceBrakes('NR');
    setMastChains('NR');
    setFuelSystemLeaks('NR');
    setHornStrobeLight('NR');
    setOilLeaks('NR');
    setSteeringPlay('NR');
    setLtsControls('NR');
    setTireWheelCondition('NR');
    setLights('NR');
    setParkingBrake('NR');
    setOverheadGuardForksBackrest('NR');
    setOperatorComments('');
  };
  return (
    <Container>
      <div className="meiForm p-4">
        <h3>Mobile Equipment Inspection</h3>
        <form onSubmit={handleMeiForm}>
          <Form.Group controlId="shift" className="mb-4">
            <Form.Label>Choose Shift:</Form.Label>

            <Form.Control
              as="select"
              defaultValue={shift}
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
              An "NR" will result in the forklift being immediately taken out of
              service until repairs can be made.
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
                  id="ServiceBrakesNR"
                  onChange={() => setServiceBrakes('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="ServiceBrakes"
                  id="ServiceBrakes√"
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
                  id="MastChainsNR"
                  onChange={() => setMastChains('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="MastChains"
                  id="MastChains√"
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
                  id="FuelSystemLeaksNR"
                  onChange={() => setFuelSystemLeaks('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="FuelSystemLeaks"
                  id="FuelSystemLeaks√"
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
                  id="HornStrobeLightNR"
                  onChange={() => setHornStrobeLight('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="HornStrobeLight"
                  id="HornStrobeLight√"
                  onChange={() => setHornStrobeLight('√')}
                />
              </Col>
            </Form.Group>
          </fieldset>
          <hr />
          <fieldset>
            <p>
              An "NR" will result in the forklift being immediately taken out of
              service if the problem is excessive. The forklift will remain out
              of service until repairs are made.
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
                  id="OilLeaksNR"
                  onChange={() => setOilLeaks('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="OilLeaks"
                  id="OilLeaks√"
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
                  id="SteeringPlayNR"
                  onChange={() => setSteeringPlay('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="SteeringPlay"
                  id="SteeringPlay√"
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
                  id="LtsControlsNR"
                  onChange={() => setLtsControls('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="LtsControls"
                  id="LtsControls√"
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
                  id="TireWheelConditionNR"
                  onChange={() => setTireWheelCondition('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="TireWheelCondition"
                  id="TireWheelCondition√"
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
                  id="LightsNR"
                  onChange={() => setLights('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="Lights"
                  id="Lights√"
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
                  id="ParkingBrakeNR"
                  onChange={() => setParkingBrake('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="ParkingBrake"
                  id="ParkingBrake√"
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
                  id="OverheadGuardForksBackrestNR"
                  onChange={() => setOverheadGuardForksBackrest('NR')}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="√"
                  name="OverheadGuardForksBackrest"
                  id="OverheadGuardForksBackrest√"
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
                defaultValue={operatorComments}
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
  );
};

export default MobileEquipmentInspection;
