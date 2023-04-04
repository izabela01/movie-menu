/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';
import Carousel from 'react-bootstrap/Carousel';

export function CarouselComp(props) {
  const { data } = props;

  return (
    <Carousel className="Carousel">

      {data ? data.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt=""
          />

          <Carousel.Caption>
            <h3>{movie.original_title}</h3>
            <p>{movie.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )) : false }
      ;
    </Carousel>
  );
}
