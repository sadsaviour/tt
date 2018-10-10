import React from 'react';
import styled from 'styled-components';
import CompanyCard from './CompanyCard';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;

const companies = [
  { value: 'Progress' },
  { value: 'A-a-a-a' },
  { value: 'Neopharm' },
  { value: 'Bambule' },
  { value: 'Marriot' },
];

export default () => (
  <Container>
    {companies.map((e, i) => (
      <CompanyCard key={String(i)} id={e.value.toLowerCase()} value={e.value} />
    ))}
  </Container>
);
