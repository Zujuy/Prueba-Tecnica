import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from '../../styles/components';

function Cards({ posts }) {
  return (
    <Carousel>
      {posts.map(({ title, content, owner, _id }) => (
        <article>
          <h2>{title}</h2>
          <p>{content}</p>
          <div>
            <small>Usuario: {owner}</small>
          </div>
        </article>
      ))}
    </Carousel>
  );
}

export default Cards;
