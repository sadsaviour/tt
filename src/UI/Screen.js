import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1 0 auto;
  flex-direction: column;
  max-width: 450px;

  align-items: center;
  margin-left: auto;
  margin-right: auto;

  background: white;
  border: 1px solid grey;
`;

export default ({ children }) => <Container>{children}</Container>;
