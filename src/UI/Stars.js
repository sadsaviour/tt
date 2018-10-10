import React from 'react';
import styled from 'styled-components';
import star from '../assets/star.svg';
import starHalf from '../assets/starHalf.svg';
import starOutline from '../assets/starOutline.svg';

const Container = styled.div`
  display: flex;
  padding-top: 12;
  padding-bottom: 24;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Star = styled.img`
  height: 20px;
  width: 20px;
`;

const defaultSetRating = (id, rating) => alert(`Rating: ${rating}`);

const Stars = ({
  rating, active, setRating = defaultSetRating, id = 0,
}) => (
  <Container>
    {Array(5)
      .fill()
      .map((e, i) => {
        if (i < rating && i + 1 <= rating) {
          return setRating ? (
            <Star src={star} key={String(i)} onClick={active ? () => setRating(id, i + 1) : null} />
          ) : (
            <Star src={star} key={String(i)} />
          );
        }
        if (i < rating && i + 1 > rating) {
          return <Star src={starHalf} key={String(i)} />;
        }
        return setRating ? (
          <Star
            src={starOutline}
            key={String(i)}
            onClick={active ? () => setRating(id, i + 1) : null}
          />
        ) : (
          <Star src={starOutline} key={String(i)} />
        );
      })}
  </Container>
);

export default Stars;
