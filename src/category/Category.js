import React from 'react';
import styled from 'styled-components';
import CompanyList from '../company/CompanyList';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Category = ({ match }) => (
  <Container>
    {match.params.topicId}
    <CompanyList />
  </Container>
);

export default Category;
