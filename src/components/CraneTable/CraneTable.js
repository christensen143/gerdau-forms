import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';

import { Container } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

import MaterialTable from 'material-table';

import './CraneTable.css';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore.collection('Crane Inspection').onSnapshot((snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(newData);
    });
  }, []);
  return data;
};

const CraneTable = () => {
  const data = useData();

  const date = moment().format('YYYY-MM-DD');

  const myData = data.map((d) => {
    return {
      shift: d['Shift'],
      mainHoistCable: d['Main Hoist Cable'],
      blockHook: d['Block Hook'],
      reeving: d['Reeving'],
      upperLimitSwitch: d['Upper Limit Switch'],
      brakesOilLeakage: d['Brakes/Oil Leakage'],
      slingsChains: d['Slings/Chains'],
      horn: d['Horn'],
      remoteControlBox: d['Remote Control Box'],
      operatingMechanisms: d['Operating Mechanisms'],
      operatorComments: d['Operator Comments'],
      user: d['User'],
      date: d['Date'],
    };
  });

  const headers = [
    { label: 'Date Submitted', key: 'date' },
    { label: 'Submitted By', key: 'user' },
    {
      label: 'Shift',
      key: 'shift',
    },
    { label: 'Main Hoist Cable', key: 'mainHoistCable' },
    { label: 'Block Hook', key: 'blockHook' },
    { label: 'Reeving', key: 'reeving' },
    { label: 'Upper Limit Switch', key: 'upperLimitSwitch' },
    {
      label: 'Brakes/Oil Leakage',
      key: 'brakesOilLeakage',
    },
    { label: 'Horn', key: 'horn' },
    {
      label: 'Remote Control Box',
      key: 'remoteControlBox',
    },
    { label: 'Operating Mechanisms', key: 'operatingMechanisms' },
    { label: 'Operator Comments', key: 'operatorComments' },
  ];
  return (
    <>
      <Container className="UserAdmin">
        <div className="csv-link mt-2">
          <CSVLink
            data={myData}
            headers={headers}
            filename={`crane-pei-data-${date}`}
          >
            <i className="material-icons">get_app</i> Export to CSV
          </CSVLink>
        </div>
        <MaterialTable
          columns={[
            { title: 'Date Submitted', field: 'date', defaultSort: 'desc' },
            { title: 'Submitted By', field: 'user' },
            {
              title: 'Shift',
              field: 'shift',
            },
            { title: 'Main Hoist Cable', field: 'mainHoistCable' },
            { title: 'Block Hook', field: 'blockHook' },
            { title: 'Reeving', field: 'reeving' },
            { title: 'Upper Limit Switch', field: 'upperLimitSwitch' },
            {
              title: 'Brakes/Oil Leakage',
              field: 'brakesOilLeakage',
            },
            { title: 'Horn', field: 'horn' },
            {
              title: 'Remote Control Box',
              field: 'remoteControlBox',
            },
            { title: 'Operating Mechanisms', field: 'operatingMechanisms' },
            { title: 'Operator Comments', field: 'operatorComments' },
          ]}
          data={myData}
          options={{
            headerStyle: {
              backgroundColor: '#779ec3',
              color: '#FFFFFF',
              zIndex: 0,
            },
          }}
          title="Crane Pre-Inspection Submissions"
          localization={{
            body: {
              emptyDataSourceMessage: 'Loading submissions...',
            },
          }}
        />
      </Container>
    </>
  );
};

export default CraneTable;
