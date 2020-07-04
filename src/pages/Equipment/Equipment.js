import React from 'react';

import { Container, Tab, Tabs } from 'react-bootstrap';

import Polisher from '../../components/Polisher/Polisher';
import Turners from '../../components/Turners/Turners';
import Straightener from '../../components/Straightener/Straightener';
import Floormen from '../../components/Floormen/Floormen';
import MultCut from '../../components/MultCut/MultCut';

import './Equipment.css';

const Equipment = () => {
  return (
    <Container className="Equipment p-4">
      <h3>Equipment</h3>
      <Tabs defaultActiveKey="Polisher" id="equipment-menu">
        <Tab eventKey="Polisher" title="Polisher">
          <Polisher />
        </Tab>
        <Tab eventKey="Turners" title="Turners">
          <Turners />
        </Tab>
        <Tab eventKey="Straightener" title="Straightener">
          <Straightener />
        </Tab>
        <Tab eventKey="Floormen" title="Floormen">
          <Floormen />
        </Tab>
        <Tab eventKey="Mult Cut" title="Mult Cut">
          <MultCut />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Equipment;
