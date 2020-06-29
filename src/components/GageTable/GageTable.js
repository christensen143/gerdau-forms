import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import { Container } from 'react-bootstrap';

import MaterialTable from 'material-table';

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
  return (
    <>
      <Container className="GageTable">
        <MaterialTable
          columns={[
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
