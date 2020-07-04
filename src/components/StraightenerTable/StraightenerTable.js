import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';

import { Container } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

import MaterialTable from 'material-table';

import './StraightenerTable.css';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore.collection('Straightener').onSnapshot((snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(newData);
    });
  }, []);
  return data;
};

const StraightenerTable = () => {
  const data = useData();

  const date = moment().format('YYYY-MM-DD');

  const myData = data.map((d) => {
    return {
      greenMileFloorSurfaces: d['Green Mile & Floor Surfaces'],
      machineGuarding: d['Machine Guarding'],
      handTools: d['Hand Tools'],
      airWands: d['Air Wands'],
      powerTools: d['Power Tools'],
      electricalCords: d['Electrical Cords'],
      operatorComments: d['Comments'],
      electricalCabinets: d['Electrical Cabinets'],
      pwhgLines: d['Pneumatic, Water, Hydraulic, and Gas Lines'],
      cranes: d['Cranes'],
      riggingChains: d['Rigging Chains'],
      flammableLiquids: d['Flammable Liquids'],
      fireExtinguishers: d['Fire Extinguishers'],
      lightCurtains: d['Light Curtains'],
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
    { label: 'Machine Guarding', key: 'machineGuarding' },
    { label: 'Hand Tools', key: 'handTools' },
    { label: 'Air Wands', key: 'airWands' },
    {
      label: 'Power Tools',
      key: 'powerTools',
    },
    { label: 'Electrical Cords', key: 'electricalCords' },
    {
      label: 'Electrical Cabinets',
      key: 'eletricalCabinets',
    },
    { label: 'Pneumatic, Water, Hydraulic, and Gas Lines', key: 'pwhgLines' },
    {
      label: 'Cranes',
      key: 'cranes',
    },
    {
      label: 'Rigging (Chains)',
      key: 'riggingChains',
    },
    {
      label: 'Flammable Liquids',
      key: 'flammableLiquids',
    },
    {
      label: 'Fire Extinguishers',
      key: 'fireExtinguishers',
    },
    {
      label: 'Light Curtains',
      key: 'lightCurtains',
    },
    { label: 'Operator Comments', key: 'operatorComments' },
  ];
  return (
    <>
      <Container className="StraightenerTable">
        <div className="csv-link mt-2">
          <CSVLink
            data={myData}
            headers={headers}
            filename={`straightener-data-${date}`}
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
            { title: 'Machine Guarding', field: 'machineGuarding' },
            { title: 'Hand Tools', field: 'handTools' },
            { title: 'Air Wands', field: 'airWands' },
            {
              title: 'Power Tools',
              field: 'powerTools',
            },
            { title: 'Electrical Cords', field: 'electricalCords' },
            {
              title: 'Electrical Cabinets',
              field: 'electricalCabinets',
            },
            {
              title: 'Pneumatic, Water, Hydraulic, and Gas Lines',
              field: 'pwhgLines',
            },
            {
              title: 'Cranes',
              field: 'cranes',
            },
            {
              title: 'Rigging (Chains)',
              field: 'riggingChains',
            },
            {
              title: 'Flammable Liquids',
              field: 'flammableLiquids',
            },
            {
              title: 'Fire Extinguishers',
              field: 'fireExtinguishers',
            },
            {
              title: 'Light Curtains',
              field: 'lightCurtains',
            },
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
          title="Straightener Submissions"
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

export default StraightenerTable;
