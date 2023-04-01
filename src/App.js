import React, { useEffect, useState } from 'react';
import {CarouselComp} from './features/CarouselComp.jsx'


export function App() {

    const [dataArr, setDataArr] = useState(null);

        // Console log the data 
    async function getData(url){
        // Fetch the data - useEffect or fetch 
        let response = await fetch(url);

        if( response.status >= 200 && response.status < 400){ 
        let data = await response.json();
        console.log('**** Data Set ***** ', data);
        console.log('*** accessing array ****', data.results);

        setDataArr(data.results);

        // Cycling through the array, printing the title field of each movie object
        data.results.forEach(movie => {
                console.log('the movie title - ', movie.original_title);
                const cardContainer = document.getElementById('card-container')
                const card = document.createElement('div');
                const Movieimage = document.createElement('img');
                Movieimage.src = 'https://www.shutterstock.com/image-vector/euphoria-quotetrippy-letteringvector-hand-drawn-600w-2252653729.jpg';
                const ptag = document.createElement('p')
                ptag.textContent = movie.original_title;
                card.appendChild(Movieimage);
                card.appendChild(ptag);
                cardContainer.appendChild(card)
            });
        }
        else{
            console.log('error: api request error');
        }
        }

    useEffect(() => {
        getData('https://api.themoviedb.org/3/discover/movie?api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
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

