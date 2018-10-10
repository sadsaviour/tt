import React from 'react';
import styled from 'styled-components';
import ReviewList from '../review/ReviewsList';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
`;

const Info = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  padding: 8px;
`;

export default ({ match }) => (
  <Container>
    <Info>
      Name:
      {match.params.companyId}
      <br />
      Address:
      <br />
      Business hours:
    </Info>
    <ReviewList />
  </Container>
);
