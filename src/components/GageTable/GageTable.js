import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import moment from 'moment';

import { Container } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

import MaterialTable from 'material-table';

import './GageTable.css';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore.collection('Gage Records').onSnapshot((snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(newData);
    });
  }, []);
  return data;
};

const GageTable = () => {
  const data = useData();

  const date = moment().format('YYYY-MM-DD');

  const myData = data.map((d) => {
    return {
      actReadings: d['Act. Readings'],
      comments: d['Comments'],
      gageNumber: d['Gage Number'],
      pass: d['Pass'],
      stdBlockId: d['Std./Block ID'],
      type: d['Type'],
      operator: d['Operator'],
      user: d['User'],
      date: d['Date'],
    };
  });

  const headers = [
    { label: 'Date Submitted', key: 'date' },
    { label: 'Submitted By', key: 'user' },
    {
      label: 'Type',
      key: 'type',
    },
    { label: 'Operator', key: 'operator' },
    { label: 'Gage Number', key: 'gageNumber' },
    { label: 'Act Readings', key: 'actReadings' },
    { label: 'Std./Block ID', key: 'stdBlockId' },
    {
      label: 'Pass',
      key: 'pass',
    },
    { label: 'Comments', key: 'comments' },
  ];
  return (
    <>
      <Container className="GageTable">
        <div className="csv-link mt-2">
          <CSVLink
            data={myData}
            headers={headers}
            filename={`gage-data-${date}`}
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
              title: 'Type',
              field: 'type',
            },
            { title: 'Operator', field: 'operator' },
            { title: 'Gage Number', field: 'gageNumber' },
            { title: 'Act Readings', field: 'actReadings' },
            { title: 'Std./Block ID', field: 'stdBlockId' },
            {
              title: 'Pass',
              field: 'pass',
            },
            { title: 'Comments', field: 'comments' },
          ]}
          data={myData}
          options={{
            headerStyle: {
              backgroundColor: '#779ec3',
              color: '#FFFFFF',
              zIndex: 0,
            },
          }}
          title="Gage Records Submissions"
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

export default GageTable;
