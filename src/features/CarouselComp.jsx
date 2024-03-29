/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';
import Carousel from 'react-bootstrap/Carousel';

export function CarouselComp(props) {
  const { data } = props;

  console.log('what movies carousel gets', data);
  return (
    <Carousel className="carousel">

      {data ? data.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="carousel-image"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt=""
          />

          <Carousel.Caption>
            <p className="overview-background">{movie.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )) : false }
      ;
    </Carousel>
  );
}
