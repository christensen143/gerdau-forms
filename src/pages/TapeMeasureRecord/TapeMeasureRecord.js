import React from 'react';

import { Container, Tab, Tabs } from 'react-bootstrap';

import BHNRecord from '../../components/BHNRecord/BHNRecord';
import GageRecords from '../../components/GageRecords/GageRecords';

import './TapeMeasureRecord.css';

const TapeMeasureRecord = () => {
  return (
    <Container className="tapeMeasureRecord p-4">
      <h3>Tape Measure Record</h3>
      <Tabs defaultActiveKey="GageRecords" id="tape-measure-record-menu">
        <Tab eventKey="GageRecords" title="Gage Records">
          <GageRecords />
        </Tab>
        <Tab eventKey="BHNRecord" title="BHN Record">
          <BHNRecord />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TapeMeasureRecord;
