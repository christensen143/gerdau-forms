import React, { useContext, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';

import { Col, Container, Form, Row } from 'react-bootstrap';

import LoaderButton from '../../components/LoaderButton/LoaderButton';

import SuccessModal from '../../modals/SuccessModal/SuccessModal';

import { AuthContext } from '../../context/AuthContext';

import uncheckRadios from '../../helpers/uncheckRadios';

import './CranePreInspection.css';

const CranePreInspection = () => {
  const { user } = useContext(AuthContext);
  const [shift, setShift] = useState('');
  const [blockHook, setBlockHook] = useState('');
  const [mainHoistCable, setMainHoistCable] = useState('');
  const [reeving, setReeving] = useState('');
  const [upperLimitSwitch, setUpperLimitSwitch] = useState('');
  const [brakesOilLeakage, setBrakesOilLeakage] = useState('');
  const [slingsChains, setSlingsChains] = useState('');
  const [horn, setHorn] = useState('');
  const [remoteControlBox, setRemoteControlBox] = useState('');
  const [operatingMechanisms, setOperatingMechanisms] = useState('');
  const [operatorComments, setOperatorComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  const radioCount = document.getElementsByTagName('input').length;

  const validateForm = () => {
    return shift !== '';
  };

  const handleCraneForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    firestore
      .collection('Crane Inspection')
      .add({
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
        User: user.displayName,
      })
      .then(() => {
        setShowSuccessModal(true);
        uncheckRadios(radioCount);
        setIsSubmitting(false);
        setShift('');
        setBlockHook('');
        setMainHoistCable('');
        setReeving('');
        setUpperLimitSwitch('');
        setBrakesOilLeakage('');
        setSlingsChains('');
        setHorn('');
        setRemoteControlBox('');
        setOperatingMechanisms('');
        setOperatorComments('');
      });
  };
  return (
    <>
      <Container>
        <div className="ciForm p-4">
          <h3>Crane Pre-Inspection</h3>
          <form onSubmit={handleCraneForm}>
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
                    id="radio1"
                    onChange={() => setMainHoistCable('√')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="X"
                    name="MainHoistCable"
                    id="radio2"
                    onChange={() => setMainHoistCable('X')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="N"
                    name="MainHoistCable"
                    id="radio3"
                    onChange={() => setMainHoistCable('N')}
                  />
                </Col>
                <p>
                  Visually inspect for wear, broken wire, and kinks. A wire rope
                  used on a crane shall be repaired or replaced if:
                  <ol type="a">
                    <li>
                      Within a segment of 8 diameters in length, the total
                      number of broken wires, exceeds 10% of the total number of
                      wires, or 6 or more wires are broken in a strand.{' '}
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
                    id="radio4"
                    onChange={() => setBlockHook('√')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="X"
                    name="BlockHook"
                    id="radio5"
                    onChange={() => setBlockHook('X')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="N"
                    name="BlockHook"
                    id="radio6"
                    onChange={() => setBlockHook('N')}
                  />
                </Col>
                <p>
                  Visual for cracks/deformation, including increased throat
                  opening and twist. Check the latch if equipped for damage and
                  that it operates properly, check hook welds on caddy for
                  cracks and excess wear inside hooks.{' '}
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
                    id="radio7"
                    onChange={() => setReeving('√')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="X"
                    name="Reeving"
                    id="radio8"
                    onChange={() => setReeving('X')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="N"
                    name="Reeving"
                    id="radio9"
                    onChange={() => setReeving('N')}
                  />
                </Col>
                <p>
                  Visually inspect for proper seating in drum and sheave
                  grooves. Cable should be in the grooves on the drum and in the
                  sheave grooves on the hook block, no overlapping or gaps
                  between the cable.
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
                    id="radio10"
                    onChange={() => setUpperLimitSwitch('√')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="X"
                    name="UpperLimitSwitch"
                    id="radio11"
                    onChange={() => setUpperLimitSwitch('X')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="N"
                    name="UpperLimitSwitch"
                    id="radio12"
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
                    id="radio13"
                    onChange={() => setBrakesOilLeakage('√')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="X"
                    name="BrakesOilLeakage"
                    id="radio14"
                    onChange={() => setBrakesOilLeakage('X')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="N"
                    name="BrakesOilLeakage"
                    id="radio15"
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
                    id="radio16"
                    onChange={() => setSlingsChains('√')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="X"
                    name="SlingsChains"
                    id="radio17"
                    onChange={() => setSlingsChains('X')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="N"
                    name="SlingsChains"
                    id="radio18"
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
                    id="radio19"
                    onChange={() => setHorn('√')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="X"
                    name="Horn"
                    id="radio20"
                    onChange={() => setHorn('X')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="N"
                    name="Horn"
                    id="radio21"
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
                    id="radio22"
                    onChange={() => setRemoteControlBox('√')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="X"
                    name="RemoteControlBox"
                    id="radio23"
                    onChange={() => setRemoteControlBox('X')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="N"
                    name="RemoteControlBox"
                    id="radio24"
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
                    id="radio25"
                    onChange={() => setOperatingMechanisms('√')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="X"
                    name="OperatingMechanisms"
                    id="radio26"
                    onChange={() => setOperatingMechanisms('X')}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="N"
                    name="OperatingMechanisms"
                    id="radio27"
                    onChange={() => setOperatingMechanisms('N')}
                  />
                </Col>
                <p>
                  Visually and operationally inspect for function, and to be
                  sure that caddie is in good condition. Check for smooth
                  motion, not jerky, no unusual sounds or noise, all functions
                  operating normally.
                </p>
              </Form.Group>
            </fieldset>
            <hr />
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

export default CranePreInspection;
