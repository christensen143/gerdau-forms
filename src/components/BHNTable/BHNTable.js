import React, { useEffect, useState } from 'react';

import { firestore } from '../../utils/firebase';

import { Container } from 'react-bootstrap';

import MaterialTable from 'material-table';

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

  const myData = data.map((d) => {
    return {
      operator: d['Operator'],
      actReadings: d['Act. Readings'],
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
              title: 'Operator',
              field: 'operator',
            },
            { title: 'Act Readings', field: 'actReadings' },
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
