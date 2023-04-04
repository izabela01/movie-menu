import React, { useEffect, useState } from 'react';
import {CarouselComp} from './features/CarouselComp.jsx'
import {getData, getMoviesByActor} from './data/index.js'

export function App() {

    const [dataArr, setDataArr] = useState(null);
    const [moviesByActor,  setMoviesByActor] = useState(null);
    const [name, setName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // I used stackoverflow to fix the data coming back but I dont fully understand
    // it yet - https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val
    // I had to await the getData for the data to resolve itself in the CarouselComp prop
    useEffect(async () => {
       let moviesList = await getData('https://api.themoviedb.org/3/discover/movie?api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
    //    let moviesListByActor = await getMoviesByActor();    
       setDataArr(moviesList);
        }, 
        []);



    const handleSubmit = async (event) => {
        event.preventDefault();
        let moviesByActorList = await getMoviesByActor(name);
        setIsSubmitted(true);
        setMoviesByActor(moviesByActorList);
        console.log('moviesByActor', moviesByActor);
       console.log('moviesByActorList', moviesByActorList);


    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <label>Enter your actor name:
                        <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </label>
                <input type="submit" />
            </form>

            <h1>Movies</h1>
            <div className="container">
                <div className="red-box"> </div>
                <div className="blue-box"> </div>
                </div>
        {/* do this as a single if statement */}
 {isSubmitted ? <CarouselComp id='carouselcomp' data={moviesByActor}></CarouselComp> : <CarouselComp id='carouselcomp' data={dataArr}></CarouselComp>}

    <div className="container" id="card-container">
    <div id='card'className='Card'>
      <div className="imageContainer">
      <img src="https://www.shutterstock.com/image-vector/euphoria-quotetrippy-letteringvector-hand-drawn-600w-2252653729.jpg" alt="Euthoria series" className='image'/> 
      </div>
    </div>
    </div>
    </div>
    );
}

