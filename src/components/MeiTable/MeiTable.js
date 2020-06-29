import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import { Container } from 'react-bootstrap';

import MaterialTable from 'material-table';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore
      .collection('Mobile Equipment Inspection')
      .onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(newData);
      });
  }, []);
  return data;
};

const MeiTable = () => {
  const data = useData();

  const myData = data.map((d) => {
    return {
      fuelSystemLeaks: d['Fuel System Leaks'],
      hornStrobeLight: d['Horn & Strobe Light'],
      liftCtlTiltSideShiftCtls: d['Lift Control, Tilt, Side Shift Controls'],
      lights: d['Lights (forward, backup, brake)'],
      mastChains: d['Mast & Chains'],
      oilLeaks: d['Oil Leaks'],
      operatorComments: d['Operator Comments'],
      overheadGuardForksBackrest: d['Overhead Guard, Forks, and Backrest'],
      parkingBrake: d['Parking Brake'],
      serviceBrakes: d['Service Brakes'],
      shift: d['Shift'],
      steeringPlay: d['Steering Play'],
      tireWheelCondition: d['Tire/Wheel Condition'],
      user: d['User'],
      date: d['Date'],
    };
  });
  return (
    <>
      <Container className="MeiTable">
        <MaterialTable
          columns={[
            {
              title: 'Shift',
              field: 'shift',
            },
            { title: 'Service Brakes', field: 'serviceBrakes' },
            { title: 'Mast & Chains', field: 'mastChains' },
            { title: 'Fuel System Leaks', field: 'fuelSystemLeaks' },
            { title: 'Horn & Strobe Light', field: 'hornStrobeLight' },
            {
              title: 'Oil Leaks',
              field: 'oilLeaks',
            },
            { title: 'Steering Play', field: 'steeringPlay' },
            {
              title: 'Lift Control, Tilt, Side Shift Controls',
              field: 'liftCtlTiltSideShiftCtls',
            },
            { title: 'Tire/Wheel Condition', field: 'tireWheelCondition' },
            { title: 'Lights (forward, backup, brake)', field: 'lights' },
            {
              title: 'Parking Brake',
              field: 'parkingBrake',
            },
            {
              title: 'Overhead Guard, Forks, and Backrest',
              field: 'overheadGuardForksBackrest',
            },
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
          title="Mobile Equipment Inspection Submissions"
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

export default MeiTable;
