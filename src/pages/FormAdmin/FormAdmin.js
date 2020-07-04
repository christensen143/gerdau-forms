import React, { useContext } from 'react';

import { Container, Nav, Tab } from 'react-bootstrap';

import CraneTable from '../../components/CraneTable/CraneTable';
import EquipmentTables from '../../components/EquipmentTables/EquipmentTables';
import MeiTable from '../../components/MeiTable/MeiTable';
import TapeMeasureTables from '../../components/TapeMeasureTables/TapeMeasureTables';

import { AuthContext } from '../../context/AuthContext';

import './FormAdmin.css';

const FormAdmin = () => {
  const { data, dispatch } = useContext(AuthContext);

  const { faActiveTab } = data;

  const handleSelect = (key) => {
    dispatch({ type: 'SET_FA_ACTIVE_TAB', faActiveTab: key });
  };

  return (
    <Container className="FormAdmin">
      <h3>Form Admin</h3>
      <Tab.Container activeKey={faActiveTab} onSelect={handleSelect}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey={'MeiTable'}>
              Mobile Equipment Inspection
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={'TapeMeasureTables'}>
              Tape Measure Record
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={'CraneTable'}>Crane Pre-Inspection</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={'EquipmentTables'}>Equipment</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey={'MeiTable'}>
            <MeiTable />
          </Tab.Pane>
        </Tab.Content>
        <Tab.Content>
          <Tab.Pane eventKey={'TapeMeasureTables'}>
            <TapeMeasureTables />
          </Tab.Pane>
        </Tab.Content>
        <Tab.Content>
          <Tab.Pane eventKey={'CraneTable'}>
            <CraneTable />
          </Tab.Pane>
        </Tab.Content>
        <Tab.Content>
          <Tab.Pane eventKey={'EquipmentTables'}>
            <EquipmentTables />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default FormAdmin;
