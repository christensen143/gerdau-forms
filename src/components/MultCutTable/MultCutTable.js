import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';

import { Container } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

import MaterialTable from 'material-table';

import './MultCutTable.css';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore.collection('MultCut').onSnapshot((snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(newData);
    });
  }, []);
  return data;
};

const MultCutTable = () => {
  const data = useData();

  const date = moment().format('YYYY-MM-DD');

  const myData = data.map((d) => {
    return {
      greenMileFloorSurfaces: d['Green Mile & Floor Surfaces'],
      floorScrubber: d['Floor Scrubber'],
      machineGuarding: d['Machine Guarding'],
      interlockedRoboticGates: d['Interlocked Robotic Gates'],
      airWands: d['Air Wands'],
      electricalCords: d['Electrical Cords'],
      operatorComments: d['Comments'],
      electricalCabinets: d['Electrical Cabinets'],
      pwhLines: d['Pneumatic, Water, and Hydraulic Lines'],
      pendentControlledCraneControls: d['Pendent Controlled Crane Controls'],
      forkliftOperation: d['Forklift Operation'],
      fireExtinguishers: d['Fire Extinguishers'],
      shift: d['Shift'],
      operator: d['Operator'],
      user: d['User'],
      date: d['Date'],
    };
  });

  const headers = [
    { label: 'Date Submitted', key: 'date' },
    { label: 'Submitted By', key: 'user' },
    {
      label: 'Operator',
      key: 'operator',
    },
    {
      label: 'Shift',
      key: 'shift',
    },
    { label: 'Green Mile & Floor Surfaces', key: 'greenMileFloorSurfaces' },
    { label: 'Floor Scrubber', key: 'floorScrubber' },
    { label: 'Machine Guarding', key: 'machineGuarding' },
    { label: 'Interlocked Robotic Gates', key: 'interlockedRoboticGates' },

    { label: 'Air Wands', key: 'airWands' },

    { label: 'Electrical Cords', key: 'electricalCords' },
    {
      label: 'Electrical Cabinets',
      key: 'electricalCabinets',
    },
    { label: 'Pneumatic, Water, and Hydraulic Lines', key: 'pwhLines' },
    {
      label: 'Pendent Controlled Crane Controls',
      key: 'pendentControlledCraneControls',
    },
    {
      label: 'Forklift Operation',
      key: 'forkliftOperation',
    },
    {
      label: 'Fire Extinguishers',
      key: 'fireExtinguishers',
    },
    {
      label: 'Operator Comments',
      key: 'operatorComments',
    },
  ];
  return (
    <>
      <Container className="MultCutTable">
        <div className="csv-link mt-2">
          <CSVLink
            data={myData}
            headers={headers}
            filename={`multcut-data-${date}`}
          >
            <i className="material-icons">get_app</i> Export to CSV
          </CSVLink>
        </div>

        <MaterialTable
          columns={[
            { title: 'Date Submitted', field: 'date', defaultSort: 'desc' },
            { title: 'Submitted By', field: 'user' },
            {
              title: 'Operator',
              field: 'operator',
            },
            {
              title: 'Shift',
              field: 'shift',
            },
            {
              title: 'Green Mile & Floor Surfaces',
              field: 'greenMileFloorSurfaces',
            },
            { title: 'Floor Scrubber', field: 'floorScrubber' },
            { title: 'Machine Guarding', field: 'machineGuarding' },
            {
              title: 'Interlocked Robotic Gates',
              field: 'interlockedRoboticGates',
            },

            { title: 'Air Wands', field: 'airWands' },

            { title: 'Electrical Cords', field: 'electricalCords' },
            {
              title: 'Electrical Cabinets',
              field: 'electricalCabinets',
            },
            {
              title: 'Pneumatic, Water, and Hydraulic Lines',
              field: 'pwhLines',
            },
            {
              title: 'Pendent Controlled Crane Controls',
              field: 'pendentControlledCraneControls',
            },
            {
              title: 'Forklift Operation',
              field: 'forkliftOperation',
            },
            {
              title: 'Fire Extinguishers',
              field: 'fireExtinguishers',
            },
            {
              title: 'Operator Comments',
              field: 'operatorComments',
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
          title="Mult Cut Submissions"
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

export default MultCutTable;
