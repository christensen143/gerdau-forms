import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';

import { Container } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

import MaterialTable from 'material-table';

import './TurnersTable.css';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore.collection('Turners').onSnapshot((snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(newData);
    });
  }, []);
  return data;
};

const TurnersTable = () => {
  const data = useData();

  const date = moment().format('YYYY-MM-DD');

  const myData = data.map((d) => {
    return {
      greenMileFloorSurfaces: d['Green Mile & Floor Surfaces'],
      machineGuarding: d['Machine Guarding'],
      handTools: d['Hand Tools'],
      airWands: d['Air Wands'],
      safetyBar: d['Safety Bar (Carriage Unit)'],
      grinders: d['Grinders'],
      operatorComments: d['Comments'],
      flammableLiquids: d['Flammable Liquids'],
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
    { label: 'Machine Guarding', key: 'machineGuarding' },
    { label: 'Hand Tools', key: 'handTools' },
    { label: 'Air Wands', key: 'airWands' },
    {
      label: 'Grinders',
      key: 'grinders',
    },
    { label: 'Safety Bar (Carriage Unit)', key: 'safetyBar' },
    { label: 'Green Mile & Floor Surfaces', key: 'greenMileFloorSurfaces' },
    {
      label: 'Flammable Liquids',
      key: 'flammableLiquids',
    },
    {
      label: 'Operator Comments',
      key: 'operatorComments',
    },
  ];

  function isEmpty(obj) {
    if (!obj) {
      return true;
    }

    if (!(typeof obj === 'number') && !Object.keys(obj).length) {
      return true;
    }

    return false;
  }

  return (
    <>
      <Container className="TurnersTable">
        <div className="csv-link mt-2">
          <CSVLink
            data={myData}
            headers={headers}
            filename={`turners-data-${date}`}
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
              title: 'Operator',
              field: 'operator',
            },
            {
              title: 'Shift',
              field: 'shift',
            },
            { title: 'Machine Guarding', field: 'machineGuarding' },
            { title: 'Hand Tools', field: 'handTools' },
            { title: 'Air Wands', field: 'airWands' },
            {
              title: 'Grinders',
              field: 'grinders',
            },
            { title: 'Safety Bar (Carriage Unit)', field: 'safetyBar' },
            {
              title: 'Green Mile & Floor Surfaces',
              field: 'greenMileFloorSurfaces',
            },
            {
              title: 'Flammable Liquids',
              field: 'flammableLiquids',
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
          title="Turners Submissions"
          localization={
            !isEmpty(data)
              ? {
                  body: {
                    emptyDataSourceMessage: 'Loading submissions...',
                  },
                }
              : {
                  body: {
                    emptyDataSourceMessage: 'No submissions to load',
                  },
                }
          }
        />
      </Container>
    </>
  );
};

export default TurnersTable;
