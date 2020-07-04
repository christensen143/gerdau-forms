import React, { useContext } from 'react';

import { Nav, Tab } from 'react-bootstrap';

import PolisherTable from '../../components/PolisherTable/PolisherTable';
import TurnersTable from '../../components/TurnersTable/TurnersTable';
import StraightenerTable from '../../components/StraightenerTable/StraightenerTable';
import FloormenTable from '../../components/FloormenTable/FloormenTable';
import MultCutTable from '../../components/MultCutTable/MultCutTable';

import { AuthContext } from '../../context/AuthContext';

const EquipmentTables = () => {
  const { data, dispatch } = useContext(AuthContext);
  const { eqActiveTab } = data;

  const handleSelect = (key) => {
    dispatch({ type: 'SET_EQ_ACTIVE_TAB', eqActiveTab: key });
  };
  return (
    <Tab.Container activeKey={eqActiveTab} onSelect={handleSelect}>
      <Nav className="ml-2 mt-2" variant="pills">
        <Nav.Item>
          <Nav.Link eventKey={'PolisherTable'}>Polisher</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={'TurnersTable'}>Turners</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={'StraightenerTable'}>Straightener</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={'FloormenTable'}>Floormen</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={'MultCutTable'}>Mult Cut</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey={'PolisherTable'}>
          <PolisherTable />
        </Tab.Pane>
      </Tab.Content>
      <Tab.Content>
        <Tab.Pane eventKey={'TurnersTable'}>
          <TurnersTable />
        </Tab.Pane>
      </Tab.Content>
      <Tab.Content>
        <Tab.Pane eventKey={'StraightenerTable'}>
          <StraightenerTable />
        </Tab.Pane>
      </Tab.Content>
      <Tab.Content>
        <Tab.Pane eventKey={'FloormenTable'}>
          <FloormenTable />
        </Tab.Pane>
      </Tab.Content>
      <Tab.Content>
        <Tab.Pane eventKey={'MultCutTable'}>
          <MultCutTable />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default EquipmentTables;
