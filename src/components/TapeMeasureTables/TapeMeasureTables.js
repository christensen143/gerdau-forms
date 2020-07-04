import React, { useContext } from 'react';

import { Nav, Tab } from 'react-bootstrap';

import BHNTable from '../../components/BHNTable/BHNTable';
import GageTable from '../../components/GageTable/GageTable';

import { AuthContext } from '../../context/AuthContext';

const TapeMeasureTables = () => {
  const { data, dispatch } = useContext(AuthContext);
  const { tmActiveTab } = data;

  const handleSelect = (key) => {
    dispatch({ type: 'SET_TM_ACTIVE_TAB', tmActiveTab: key });
  };

  return (
    <Tab.Container
      className="pt-4"
      activeKey={tmActiveTab}
      onSelect={handleSelect}
    >
      <Nav className="ml-2 mt-2" variant="pills">
        <Nav.Item>
          <Nav.Link eventKey={'GageTable'}>Gage Records</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={'BHNTable'}>BHN Record</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey={'GageTable'}>
          <GageTable />
        </Tab.Pane>
      </Tab.Content>
      <Tab.Content>
        <Tab.Pane eventKey={'BHNTable'}>
          <BHNTable />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default TapeMeasureTables;
