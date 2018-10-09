import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default ({ match }) => <Container>{match.params.topicId}</Container>;