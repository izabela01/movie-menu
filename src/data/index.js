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

async function getMoviesByActors(data) {
  const actor1 = data[0].results[0].id;
  const actor2 = data[1].results[0].id;
  console.log('actor1', actor1);
  console.log('actor2', actor2);

  const urlStart = 'https://api.themoviedb.org/3/discover/movie?api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&';
  const urlEnd = '&with_watch_monetization_types=flatrate';
  const middle = `with_people=${actor1},${actor2}`;

  const response = await fetch(urlStart + middle + urlEnd);
  const formattedResponse = await response.json();

  console.log('formattedResponse', formattedResponse.results);

  return formattedResponse.results;

  // const movies = formattedResponse.filter((result) => result.known_for.length > 0);

  // if (movies.length > 0) {
  //   return movies[0].known_for;
  // }
}

export async function getMoviesByActor(name, nameTwo) {
  console.log('names!! ', name, nameTwo);
  const actorsNames = [name, nameTwo];

  const data = Promise.all(actorsNames.map(async (actor) => {
    const urlStart = 'https://api.themoviedb.org/3/search/person?query=';
    const names = actor.split(' ');
    console.log('names', names);
    const formattedName = names.join('%20');
    const urlEnd = '&api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0&language=en-US&page=1&include_adult=true';
    console.log(urlStart + formattedName + urlEnd);
    const response = await fetch(urlStart + formattedName + urlEnd);
    const formattedResponse = await response.json();
    return formattedResponse;
  }));

  console.log('data in async', await data);

  const moviesList = getMoviesByActors(await data);
  return moviesList;
  // const movies = moviesResults.filter((result) => result.known_for.length > 0);

  // if (movies.length > 0) {
  //   return movies[0].known_for;
  // }

  // alert('Actor cannot be found, please double check spelling and try again!');
}
