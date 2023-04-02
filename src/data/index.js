       // Console log the data 
     export async function getData(url){
        // Fetch the data - useEffect or fetch 
        let response = await fetch(url);

        if( response.status >= 200 && response.status < 400){ 
        let data = await response.json();
        console.log('**** Data Set ***** ', data);
        console.log('*** accessing array ****', data.results);

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
            return data.results;
        }
        else{
            console.log('error: api request error');
        }
        }

   