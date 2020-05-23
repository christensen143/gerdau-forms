import React from 'react';

import Instructions from '../../components/Instructions/Instructions';

import './Home.css';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Instructions />;
    </Container>
  );
};

export default Home;
