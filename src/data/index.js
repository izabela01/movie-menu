/* eslint-disable consistent-return */
export async function getMovies(url) {
  const response = await fetch(url);

  if (response.status >= 200 && response.status < 400) {
    const data = await response.json();

    return data.results;
  }
}

export async function getMoviesByActors(data) {
  const actor1 = data[0];

  let urlStart;
  const urlEnd =
    "&api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0&language=en-US&page=1&include_adult=true";

  urlStart = "https://api.themoviedb.org/3/search/person?query=";
  actor1.split(" ").join("%20");
  const middle = `${actor1}`;

  const response = await fetch(urlStart + middle + urlEnd);
  const formattedResponse = await response.json();

  return formattedResponse.results[0].known_for;
}
