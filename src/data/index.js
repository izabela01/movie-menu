/* eslint-disable consistent-return */
export async function getMovies(url) {
  const response = await fetch(url);

  if (response.status >= 200 && response.status < 400) {
    const data = await response.json();
    console.log("*** Movies array ****", data.results);

    return data.results;
  }
  console.log("error: api request error");
}

export async function getMoviesByActors(data) {
  // i need to improve the bit below here, so it doesnt matter whether one actor ID is put in
  // or two actor IDs
  console.log("This is the second function", typeof data, data, data.length);
  const actor1 = data[0];
  const actor2 = data[1];

  // I need to put the %20 in between the names to put a gap in between
  const urlStart = "https://api.themoviedb.org/3/search/person?query=";
  const urlEnd =
    "&api_key=7ceb5ca6f93c5d8c993f1f5783f5ccf0&language=en-US&page=1&include_adult=true";

  let middle;

  if (data.length > 1) {
    const actor_1 = actor1.split(" ");
    const actor_2 = actor2.split(" ");
    console.log("id .. ", actor_1, actor_2);
    const actor_formatted1 = actor_1.join("%20");
    const actor_formatted2 = actor_2.join("%20");
    console.log("id .. ", actor_formatted1, actor_formatted2);

    middle = `with_people=${actor_formatted1},${actor_formatted2}`;
  } else {
    actor1.split(" ").join("%20");
    middle = `${actor1}`;
  }

  console.log("ID ... ", middle);

  console.log("url .. ", urlStart + middle + urlEnd);

  const response = await fetch(urlStart + middle + urlEnd);
  const formattedResponse = await response.json();
  console.log("ID ... formattedResponse", formattedResponse.results);

  return formattedResponse.results[0].known_for;
}

export async function getMoviesByActor(name, nameTwo) {
  console.log("names!! ", name, nameTwo);
  const actorsNames = [name, nameTwo];

  const data = Promise.all(
    actorsNames.map(async (actor) => {
      const urlStart = "https://api.themoviedb.org/3/search/person?query=";
      const names = actor.split(" ");
      console.log("names", names);
      const formattedName = names.join("%20");
      const urlEnd =
        "&api_key=4cc54c4d5bbc3943fdc56ecfefcb0703&language=en-US&page=1&include_adult=true";
      console.log(urlStart + formattedName + urlEnd);
      const response = await fetch(urlStart + formattedName + urlEnd);
      const formattedResponse = await response.json();
      return formattedResponse;
    })
  );

  console.log("data in async", await data);

  const moviesList = getMoviesByActors(await data);
  return moviesList;
  // const movies = moviesResults.filter((result) => result.known_for.length > 0);

  // if (movies.length > 0) {
  //   return movies[0].known_for;
  // }

  // alert('Actor cannot be found, please double check spelling and try again!');
}
