export async function getData(url) {
  // Fetch the data - useEffect or fetch
  const response = await fetch(url);

  if (response.status >= 200 && response.status < 400) {
    const data = await response.json();
    console.log('*** accessing array ****', data.results);

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

  const response = await fetch(urlStart + formattedName + urlEnd);
  const data = await response.json();
  console.log('getMoviesByActor', await data);

  if (response) {
    return data.results[0].known_for;
  }
}
