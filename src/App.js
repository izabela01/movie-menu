import React, { useEffect } from 'react';
import {CarouselComp} from './features/CarouselComp.jsx'

export function App() {

    async function getData(){
        let response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0');
        let data = await response.json();
        console.log(data);
    }

    getData();

// Fetch the data - useEffect or fetch 


// Console log the data 
// figure out the how to get it into individual components using props 
// dont worry about components, do everything here for now 


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
<CarouselComp ></CarouselComp>
    <div className=' Card'>
      <img src="https://www.shutterstock.com/image-vector/euphoria-quotetrippy-letteringvector-hand-drawn-600w-2252653729.jpg" alt="Euthoria series" className='image'/> 
      <div className="imageContainer">
      <p>Filling in the space of the euthoria title art jaknajnjfejefjijefje</p>
      </div>
    </div>
        </>
    );
}

// useEffect for the API call 