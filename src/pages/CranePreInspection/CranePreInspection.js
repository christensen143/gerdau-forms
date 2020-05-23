import React, { useState } from 'react';

import moment from 'moment';

import { Col, Container, Form, Row } from 'react-bootstrap';

import LoaderButton from '../../components/LoaderButton/LoaderButton';

import './CranePreInspection.css';

const CranePreInspection = () => {
  const [shift, setShift] = useState('');
  const [blockHook, setBlockHook] = useState('√');
  const [mainHoistCable, setMainHoistCable] = useState('√');
  const [reeving, setReeving] = useState('√');
  const [upperLimitSwitch, setUpperLimitSwitch] = useState('√');
  const [brakesOilLeakage, setBrakesOilLeakage] = useState('√');
  const [slingsChains, setSlingsChains] = useState('√');
  const [horn, setHorn] = useState('√');
  const [remoteControlBox, setRemoteControlBox] = useState('√');
  const [operatingMechanisms, setOperatingMechanisms] = useState('√');
  const [operatorComments, setOperatorComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

  const validateForm = () => {
    return shift !== '';
  };

  const handleCraneForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log({
      Date: date,
      Shift: shift,
      'Block Hook': blockHook,
      'Main Hoist Cable': mainHoistCable,
      Reeving: reeving,
      'Upper Limit Switch': upperLimitSwitch,
      'Brakes/Oil Leakage': brakesOilLeakage,
      'Slings/Chains': slingsChains,
      Horn: horn,
      'Remote Control Box': remoteControlBox,
      'Operating Mechanisms': operatingMechanisms,
      'Operator Comments': operatorComments,
    });

    setIsSubmitting(false);
    setShift('');
    setBlockHook('√');
    setMainHoistCable('√');
    setReeving('');
    setUpperLimitSwitch('√');
    setBrakesOilLeakage('√');
    setSlingsChains('√');
    setHorn('√');
    setRemoteControlBox('√');
    setOperatingMechanisms('√');
    setOperatorComments('√');
  };
  return (
    <Container>
      <div className="ciForm p-4">
        <h3>Crane Pre-Inspection</h3>
        <form onSubmit={handleCraneForm}>
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

          <div className="ciInstructions">
            √ if Acceptable; X if Unacceptable; N if Not Applicable
          </div>
          <hr />
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label>Main Hoist Cable</Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="√"
                  name="MainHoistCable"
                  id="MainHoistCable√"
                  onChange={() => setMainHoistCable('√')}
                  defaultChecked
                />
                <Form.Check
                  inline
                  type="radio"
                  label="X"
                  name="MainHoistCable"
                  id="MainHoistCableX"
                  onChange={() => setMainHoistCable('X')}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="N"
                  name="MainHoistCable"
                  id="MainHoistCableN"
                  onChange={() => setMainHoistCable('N')}
                />
              </Col>
              <p>
                Visually inspect for wear, broken wire, and kinks. A wire rope
                used on a crane shall be repaired or replaced if:
                <ol type="a">
                  <li>
                    Within a segment of 8 diameters in length, the total number
                    of broken wires, exceeds 10% of the total number of wires,
                    or 6 or more wires are broken in a strand.{' '}
                  </li>
                  <li>
                    The wire rope has been kinked, crushed, or bird caged, or
                    has sustained other damage
                  </li>
                  <li> The wire rope shows heat or corrosive damage.</li>
                </ol>
              </p>
            </Form.Group>
            <hr />
            <Form.Group as={Row}>
              <Form.Label>Block Hook</Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="√"
                  name="BlockHook"
                  id="BlockHook√"
                  onChange={() => setBlockHook('√')}
                  defaultChecked
                />
                <Form.Check
                  inline
                  type="radio"
                  label="X"
                  name="BlockHook"
                  id="BlockHookX"
                  onChange={() => setBlockHook('X')}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="N"
                  name="BlockHook"
                  id="BlockHookN"
                  onChange={() => setBlockHook('N')}
                />
              </Col>
              <p>
                Visual for cracks/deformation, including increased throat
                opening and twist. Check the latch if equipped for damage and
                that it operates properly, check hook welds on caddy for cracks
                and excess wear inside hooks.{' '}
                <span style={{ color: 'red' }}>
                  Check lifting Pins and Bolts are securly fastened
                </span>
              </p>
            </Form.Group>
            <hr />
            <Form.Group as={Row}>
              <Form.Label>Reeving</Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="√"
                  name="Reeving"
                  id="Reeving√"
                  onChange={() => setReeving('√')}
                  defaultChecked
                />
                <Form.Check
                  inline
                  type="radio"
                  label="X"
                  name="Reeving"
                  id="ReevingX"
                  onChange={() => setReeving('X')}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="N"
                  name="Reeving"
                  id="ReevingN"
                  onChange={() => setReeving('N')}
                />
              </Col>
              <p>
                Visually inspect for proper seating in drum and sheave grooves.
                Cable should be in the grooves on the drum and in the sheave
                grooves on the hook block, no overlapping or gaps between the
                cable.
              </p>
            </Form.Group>
            <hr />
            <Form.Group as={Row}>
              <Form.Label>Upper Limit Switch</Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="√"
                  name="UpperLimitSwitch"
                  id="UpperLimitSwitch√"
                  onChange={() => setUpperLimitSwitch('√')}
                  defaultChecked
                />
                <Form.Check
                  inline
                  type="radio"
                  label="X"
                  name="UpperLimitSwitch"
                  id="UpperLimitSwitchX"
                  onChange={() => setUpperLimitSwitch('X')}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="N"
                  name="UpperLimitSwitch"
                  id="UpperLimitSwitchN"
                  onChange={() => setUpperLimitSwitch('N')}
                />
              </Col>
              <p>
                Run caddy slowly up to limit switch to check for proper
                function, the limit switch should stop travel before caddy
                contacts bottom of crane.
              </p>
            </Form.Group>
            <hr />
            <Form.Group as={Row}>
              <Form.Label>Brakes/Oil Leakage</Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="√"
                  name="BrakesOilLeakage"
                  id="BrakesOilLeakage√"
                  onChange={() => setBrakesOilLeakage('√')}
                  defaultChecked
                />
                <Form.Check
                  inline
                  type="radio"
                  label="X"
                  name="BrakesOilLeakage"
                  id="BrakesOilLeakageX"
                  onChange={() => setBrakesOilLeakage('X')}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="N"
                  name="BrakesOilLeakage"
                  id="BrakesOilLeakageN"
                  onChange={() => setBrakesOilLeakage('N')}
                />
              </Col>
              <p>
                Check that the brakes are working properly, and that no oil is
                leaking from the crane.
              </p>
            </Form.Group>
            <hr />
            <Form.Group as={Row}>
              <Form.Label>Slings/Chains</Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="√"
                  name="SlingsChains"
                  id="SlingsChains√"
                  onChange={() => setSlingsChains('√')}
                  defaultChecked
                />
                <Form.Check
                  inline
                  type="radio"
                  label="X"
                  name="SlingsChains"
                  id="SlingsChainsX"
                  onChange={() => setSlingsChains('X')}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="N"
                  name="SlingsChains"
                  id="SlingsChainsN"
                  onChange={() => setSlingsChains('N')}
                />
              </Col>
              <p>
                Visually inspect for wear, broken wire, elongation, and kinks.
                Check slings for wear and damage, weight limit tag or tab must
                be on sling or chain.
              </p>
            </Form.Group>
            <hr />
            <Form.Group as={Row}>
              <Form.Label>Horn</Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="√"
                  name="Horn"
                  id="Horn√"
                  onChange={() => setHorn('√')}
                  defaultChecked
                />
                <Form.Check
                  inline
                  type="radio"
                  label="X"
                  name="Horn"
                  id="HornX"
                  onChange={() => setHorn('X')}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="N"
                  name="Horn"
                  id="HornN"
                  onChange={() => setHorn('N')}
                />
              </Col>
              <p>Check that the horn/siren is working properly.</p>
            </Form.Group>
            <hr />
            <Form.Group as={Row}>
              <Form.Label>Remote Control Box</Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="√"
                  name="RemoteControlBox"
                  id="RemoteControlBox√"
                  onChange={() => setRemoteControlBox('√')}
                  defaultChecked
                />
                <Form.Check
                  inline
                  type="radio"
                  label="X"
                  name="RemoteControlBox"
                  id="RemoteControlBoxX"
                  onChange={() => setRemoteControlBox('X')}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="N"
                  name="RemoteControlBox"
                  id="RemoteControlBoxN"
                  onChange={() => setRemoteControlBox('N')}
                />
              </Col>
              <p>
                Status/functioning properly. Try all of the controls to make
                sure that they work properly and operate as labeled.
              </p>
            </Form.Group>
            <hr />
            <Form.Group as={Row}>
              <Form.Label>Operating Mechanisms</Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="√"
                  name="OperatingMechanisms"
                  id="OperatingMechanisms√"
                  onChange={() => setOperatingMechanisms('√')}
                  defaultChecked
                />
                <Form.Check
                  inline
                  type="radio"
                  label="X"
                  name="OperatingMechanisms"
                  id="OperatingMechanismsX"
                  onChange={() => setOperatingMechanisms('X')}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="N"
                  name="OperatingMechanisms"
                  id="OperatingMechanismsN"
                  onChange={() => setOperatingMechanisms('N')}
                />
              </Col>
              <p>
                Visually and operationally inspect for function, and to be sure
                that caddie is in good condition. Check for smooth motion, not
                jerky, no unusual sounds or noise, all functions operating
                normally.
              </p>
            </Form.Group>
          </fieldset>
          <hr />
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

export default CranePreInspection;
