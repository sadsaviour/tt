import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button';
import Search from './Search';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  background: lightgrey;
  padding: 8px;
`;

const FirstRow = styled.div`
  display: flex;
  flex-flow: row no wrap;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export default () => (
  <Container>
    <FirstRow>
      <Logo />
      <Button>Sign Up</Button>
      <Button>Log In</Button>
    </FirstRow>
    <Button>Leave Review</Button>
    <Search />
    <Button>Location</Button>
  </Container>
);
