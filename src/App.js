import React, { useEffect, useState } from 'react';
import {CarouselComp} from './features/CarouselComp.jsx'
import {getData} from './data/index.js'

export function App() {

    const [dataArr, setDataArr] = useState(null);

    useEffect(() => {
       let moviesList = getData('https://api.themoviedb.org/3/discover/movie?api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
       setDataArr(moviesList);
        }, 
        []);

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
<CarouselComp id='carouselcomp' data={dataArr}></CarouselComp>

    <div className="container" id= "card-container">
    <div id='card'className='Card'>
      <div className="imageContainer">
      <img src="https://www.shutterstock.com/image-vector/euphoria-quotetrippy-letteringvector-hand-drawn-600w-2252653729.jpg" alt="Euthoria series" className='image'/> 
      </div>
    </div>
    </div>

        </>
    );
}

