import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';

import { Container } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

import MaterialTable from 'material-table';

import './MeiTable.css';

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

  const date = moment().format('YYYY-MM-DD');

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

  const headers = [
    { label: 'Date Submitted', key: 'date' },
    { label: 'Submitted By', key: 'user' },
    {
      label: 'Shift',
      key: 'shift',
    },
    { label: 'Service Brakes', key: 'serviceBrakes' },
    { label: 'Mast & Chains', key: 'mastChains' },
    { label: 'Fuel System Leaks', key: 'fuelSystemLeaks' },
    { label: 'Horn & Strobe Light', key: 'hornStrobeLight' },
    {
      label: 'Oil Leaks',
      key: 'oilLeaks',
    },
    { label: 'Steering Play', key: 'steeringPlay' },
    {
      label: 'Lift Control, Tilt, Side Shift Controls',
      key: 'liftCtlTiltSideShiftCtls',
    },
    { label: 'Tire/Wheel Condition', key: 'tireWheelCondition' },
    { label: 'Lights (forward, backup, brake)', key: 'lights' },
    {
      label: 'Parking Brake',
      key: 'parkingBrake',
    },
    {
      label: 'Overhead Guard, Forks, and Backrest',
      key: 'overheadGuardForksBackrest',
    },
  ];
  return (
    <>
      <Container className="MeiTable">
        <div className="csv-link mt-2">
          <CSVLink
            data={myData}
            headers={headers}
            filename={`mei-data-${date}`}
          >
            <i className="material-icons">get_app</i> Export to CSV
          </CSVLink>
        </div>

        <MaterialTable
          columns={[
            {
              title: 'Date Submitted',
              field: 'date',
              defaultSort: 'desc',
              customSort: (a, b) =>
                moment(a.date, 'dddd, MMMM Do YYYY, h:mm:ss a').format('x') -
                moment(b.date, 'dddd, MMMM Do YYYY, h:mm:ss a').format('x'),
            },
            { title: 'Submitted By', field: 'user' },
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
