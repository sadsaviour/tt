import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const LogoMock = styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid black;

  cursor: pointer;
`;

const Logo = ({ history }) => <LogoMock onClick={() => history.push('/')} />;

export default withRouter(Logo);
