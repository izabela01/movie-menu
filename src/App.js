import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export function App() {
    return (
        <>
            <h1>Movies</h1>
            <div className="container">
                <div className="red-box"> </div>
                <div className="blue-box"> </div>
                <div className="red-box"> </div>
                <div className="blue-box"> </div>
                <div className="red-box"> </div>
                <div className="blue-box"> </div>
                <div className="red-box"> </div>
                <div className="blue-box"> </div>
                </div>
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

    <div className=' Card'>
      <img src="https://www.shutterstock.com/image-vector/euphoria-quotetrippy-letteringvector-hand-drawn-600w-2252653729.jpg" alt="Euthoria series" className='image'/> 
      <div className="imageContainer">
      <p>Filling in the space of the euthoria title art jaknajnjfejefjijefje</p>
      </div>
    </div>
        </>
    );
}