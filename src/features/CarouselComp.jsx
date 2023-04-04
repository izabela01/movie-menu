import React, { useEffect, useState } from 'react'
import './styles.scss'
import Carousel from 'react-bootstrap/Carousel';


export function CarouselComp(props){
  // improve naming conventions - props instead
  const [movies, setMovies] = useState(null);

if(props.data){
  let localData = props.data;
  let imageBaseUrl = 'https://image.tmdb.org/t/p/w300';
  console.log('One item in array - ',localData[1]) ;
}else{
   console.log('skipping')
}

  // useEffect(() => {

  //    }, 
  //    [data]);
return(
<>


    <Carousel className="Carousel">
   
   {props.data ? props.data.map(movie =>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={'https://image.tmdb.org/t/p/w300' + movie.poster_path} 
        alt=""
      />
      
      <Carousel.Caption>
        <h3>{movie.original_title}</h3>
        <p>{movie.overview}</p>
      </Carousel.Caption>
    </Carousel.Item>
   ): false };
  </Carousel>

  </>
)
}