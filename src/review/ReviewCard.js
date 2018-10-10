import React from 'react';
import styled from 'styled-components';
import Stars from '../UI/Stars';

const Container = styled.div`
  box-sizing: border-box;

  display: flex;
  flex: 1 0 50%;

  flex-flow: column;

  padding: 8px;

  border: 1px solid black;

  margin-bottom: 8px;

  :last-child {
    margin-bottom: 0;
  }
`;

const Author = styled.span``;

const Rating = styled.span``;

const Text = styled.span``;

export default ({ review }) => {
  const { authorName, text, rating } = review;
  return (
    <Container>
      <Author>{authorName}</Author>
      <Rating>
        rating:
        {rating}
      </Rating>
      <Stars rating={rating} />
      <Text>{text}</Text>
    </Container>
  );
};
