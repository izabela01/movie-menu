import React, { useEffect } from 'react';
import {CarouselComp} from './features/CarouselComp.jsx'

export function App() {

        // Console log the data 
    async function getData(url){
        // Fetch the data - useEffect or fetch 
        let response = await fetch(url);

        if( response.status >= 200 && response.status < 400){ 
        let data = await response.json();
        console.log('**** Data Set ***** ', data);
        console.log('*** accessing array ****', data.results);

        // Cycling through the array, printing the title field of each movie object
        data.results.forEach(movie => {
                console.log('the movie title - ', movie.original_title);
            });

            const card = document.getElementById('card');
            const ptag = document.createElement('p')
            ptag.textContent = data.results[1].original_title;
            card.appendChild(ptag);

        }
        else{
            console.log('error: api request error');
        }
        }
    // getData('https://api.themoviedb.org/3/movie/550?api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0');
    getData('https://api.themoviedb.org/3/discover/movie?api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');

  

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

    <div className="container" id= "card-container">
    <div id='card'className=' Card'>
      <div className="imageContainer">
      <img src="https://www.shutterstock.com/image-vector/euphoria-quotetrippy-letteringvector-hand-drawn-600w-2252653729.jpg" alt="Euthoria series" className='image'/> 
      </div>
    </div>
    </div>

        </>
    );
}

// useEffect for the API call 