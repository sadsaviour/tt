import React from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;

const categories = [
  { value: 'Restrants' },
  { value: 'Caffes' },
  { value: 'Pharmacies' },
  { value: 'Bars' },
  { value: 'Hotels' },
];

export default () => (
  <Container>
    {categories.map((e, i) => (
      <CategoryCard key={String(i)} id={e.value.toLowerCase()} value={e.value} />
    ))}
  </Container>
);
