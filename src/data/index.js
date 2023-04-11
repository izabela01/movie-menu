/* eslint-disable consistent-return */
export async function getMovies(url) {
  const response = await fetch(url);

  if (response.status >= 200 && response.status < 400) {
    const data = await response.json();
    console.log('*** Movies array ****', data.results);

    return data.results;
  }
  console.log('error: api request error');
}

export async function getMoviesByActor(name) {
  const urlStart = 'https://api.themoviedb.org/3/search/person?query=';
  const names = name.split(' ');
  console.log('names', names);
  const formattedName = names.join('%20');
  const urlEnd = '&api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0&language=en-US&page=1&include_adult=true';
  console.log(urlStart + formattedName + urlEnd);
  const response = await fetch(urlStart + formattedName + urlEnd);
  const data = await response.json();
  console.log('getMoviesByActor', await data);

  const moviesResults = data.results;
  console.log('moviesResults', moviesResults);
  const movies = moviesResults.filter((result) => result.known_for.length > 0);
  console.log('movies', movies);

  if (movies.length > 0) {
    return movies[0].known_for;
  }

  alert('Actor cannot be found, please double check spelling and try again!');
}
