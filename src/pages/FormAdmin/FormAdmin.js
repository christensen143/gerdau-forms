import React from 'react';

import { Container, Tab, Tabs } from 'react-bootstrap';

import BHNTable from '../../components/BHNTable/BHNTable';
import CraneTable from '../../components/CraneTable/CraneTable';
import GageTable from '../../components/GageTable/GageTable';
import MeiTable from '../../components/MeiTable/MeiTable';

import './FormAdmin.css';

const FormAdmin = () => {
  return (
    <Container className="FormAdmin">
      <h3>Form Admin</h3>
      <Tabs defaultActiveKey="MeiTable" id="form-admin-menu">
        <Tab eventKey="MeiTable" title="Mobile Equipment Inspection">
          <MeiTable />
        </Tab>
        <Tab eventKey="GageTable" title="Gage Records">
          <GageTable />
        </Tab>
        <Tab eventKey="BHNTable" title="BHN Records">
          <BHNTable />
        </Tab>
        <Tab eventKey="CraneTable" title="Crane Pre-Inspection">
          <CraneTable />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default FormAdmin;
