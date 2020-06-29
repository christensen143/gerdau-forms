import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import { Container } from 'react-bootstrap';

import MaterialTable from 'material-table';

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
      comments: d['Comments'],
      user: d['User'],
      date: d['Date'],
    };
  });
  return (
    <>
      <Container className="UserAdmin">
        <MaterialTable
          columns={[
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
            { title: 'Comments', field: 'comments' },
            { title: 'Submitted By', field: 'user' },
            { title: 'Date Submitted', field: 'date' },
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
