import React from 'react';
import styled from 'styled-components';
import Logo from './UI/Logo';
import Button from './UI/Button';
import Search from './UI/Search';

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
