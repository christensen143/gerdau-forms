import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';

import { Container } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

import MaterialTable from 'material-table';

import './BHNTable.css';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore.collection('BHN Record').onSnapshot((snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(newData);
    });
  }, []);
  return data;
};

const BHNTable = () => {
  const data = useData();

  const date = moment().format('YYYY-MM-DD');

  const myData = data.map((d) => {
    return {
      operator: d['Operator'],
      actReadings: d['Act. Readings'],
      operatorComments: d['Comments'],
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
    { label: 'Act Readings', key: 'actReadings' },
    { label: 'Operator Comments', key: 'operatorComments' },
  ];
  return (
    <>
      <Container className="UserAdmin">
        <div className="csv-link mt-2">
          <CSVLink
            data={myData}
            headers={headers}
            filename={`bhn-data-${date}`}
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
            { title: 'Act Readings', field: 'actReadings' },
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
          title="BHN Records Submissions"
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

export default BHNTable;
