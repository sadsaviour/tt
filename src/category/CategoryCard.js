import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';

const Container = styled.div`
  box-sizing: border-box;

  display: flex;
  flex: 1 0 50%;

  flex-flow: column;

  padding: 8px;

  border: 1px solid black;
`;

export default ({ id, value }) => (
  <Container>
    <Logo />
    <Link to={`/categories/${id}`}>{value}</Link>
  </Container>
);
