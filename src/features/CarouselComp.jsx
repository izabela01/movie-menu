import React from 'react'
import './styles.scss'
import Carousel from 'react-bootstrap/Carousel';



export function CarouselComp(){
return(
    <Carousel className="Carousel">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.shutterstock.com/image-vector/summer-sea-landscape-tropical-island-600w-1034869381.jpg"
        alt="Caravan image with surfboards"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.shutterstock.com/image-vector/summer-sea-landscape-tropical-island-600w-1034869381.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.shutterstock.com/image-vector/summer-sea-landscape-tropical-island-600w-1034869381.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)
}