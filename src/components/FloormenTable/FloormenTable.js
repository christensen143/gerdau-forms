import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';

import { Container } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

import MaterialTable from 'material-table';

import './FloormenTable.css';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore.collection('Floormen').onSnapshot((snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(newData);
    });
  }, []);
  return data;
};

const FloormenTable = () => {
  const data = useData();

  const date = moment().format('YYYY-MM-DD');

  const myData = data.map((d) => {
    return {
      greenMileFloorSurfaces: d['Green Mile & Floor Surfaces'],
      bandingHazards: d['Banding Hazards'],
      handTools: d['Hand Tools'],
      bundleSawOperation: d['Bundle Saw Operation'],
      powerTools: d['Power Tools'],
      hiltiGunUsage: d['Hilti Gun Usage'],
      operatorComments: d['Comments'],
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
    { label: 'Banding Hazards', key: 'bandingHazards' },
    { label: 'Green Mile & Floor Surfaces', key: 'greenMileFloorSurfaces' },

    { label: 'Hand Tools', key: 'handTools' },
    {
      label: 'Power Tools',
      key: 'powerTools',
    },
    { label: 'Bundle Saw Operation', key: 'bundleSawOperation' },
    {
      label: 'Hilti Gun Usage',
      key: 'hiltiGunUsage',
    },
    {
      label: 'Operator Comments',
      key: 'operatorComments',
    },
  ];
  return (
    <>
      <Container className="FloormenTable">
        <div className="csv-link mt-2">
          <CSVLink
            data={myData}
            headers={headers}
            filename={`floormen-data-${date}`}
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
            { title: 'Banding Hazards', field: 'bandingHazards' },
            {
              title: 'Green Mile & Floor Surfaces',
              field: 'greenMileFloorSurfaces',
            },

            { title: 'Hand Tools', field: 'handTools' },
            {
              title: 'Power Tools',
              field: 'powerTools',
            },
            { title: 'Bundle Saw Operation', field: 'bundleSawOperation' },
            {
              title: 'Hilti Gun Usage',
              field: 'hiltiGunUsage',
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
          title="Floormen Submissions"
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

export default FloormenTable;
