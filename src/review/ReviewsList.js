import React from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;

  padding: 8px;
`;

const sampleDate = new Date();

const reviews = [
  {
    id: 1,
    date: sampleDate,
    rating: 4,
    authorName: 'author name',
    text: 'review text of some length',
  },
  {
    id: 2,
    date: sampleDate,
    rating: 3,
    authorName: 'author name',
    text: 'review text of some length',
  },
  {
    id: 2,
    date: sampleDate,
    rating: 5,
    authorName: 'author name',
    text: 'review text of some length',
  },
];

export default () => (
  <Container>
    {reviews.map((e, i) => (
      <ReviewCard key={String(i)} review={e} />
    ))}
  </Container>
);
