import React, { useState, useEffect, useCallback } from "react";

import AddMovie from "./components/addMovies/AddMovie.js";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];

  // useEffect(() => {
  //   getMoviesHandler();
  // }, [getMoviesHandler]);

  const getMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null); // set error to null to empty state
      const res = await fetch(
        "https://react-demo-37e14-default-rtdb.firebaseio.com/movies.json"
      );
      // const res = await fetch("https://swapi.dev/api/films");

      if (!res.ok) throw new Error("something wrong ");

      const resJSON = await res.json();

      const fireBaseMovies = [];

      for (const key in resJSON) {
        fireBaseMovies.push({
          id: key,
          title: resJSON[key].title,
          releaseDate: resJSON[key].releaseDate,
          openingText: resJSON[key].openingText,
        });
      }

      // const { results } = resJSON;
      // key={movie.id}
      // title={movie.title}
      // releaseDate={movie.releaseDate}
      // openingText={movie.openingText}
      // const reFormatResponse = results.map((movie) => {
      //   return {
      //     id: movie.episode_id,
      //     title: movie.title,
      //     releaseDate: movie.release_date,
      //     openingText: movie.opening_crawl,
      //   };
      // });

      // console.log(reFormatResponse);
      // setMovies(() => reFormatResponse);

      setMovies(() => fireBaseMovies);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMoviesHandler();
  }, [getMoviesHandler]);

  // const getMoviesHandler =  () => {
  //   setIsLoading(true);
  //   const res =  fetch("https://swapi.dev/api/films")

  //   .then((res) => res.json())
  //   .then((resJSON) => {
  //   const { results } = resJSON;
  //   // key={movie.id}
  //   // title={movie.title}
  //   // releaseDate={movie.releaseDate}
  //   // openingText={movie.openingText}
  //   const reFormatResponse = results.map((movie) => {
  //     return {
  //       id: movie.episode_id,
  //       title: movie.title,
  //       releaseDate: movie.release_date,
  //       openingText: movie.opening_crawl,
  //     };
  //   });
  //   console.log(reFormatResponse);
  //   setMovies(() => reFormatResponse);
  //   setIsLoading(false);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // };

  // Adding  movies dynamic
  const addMovieHandler = async (movie) => {
    try {
      const res = await fetch(
        "https://react-demo-37e14-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: { "Content-Type": "application/json" },
        }
      );

      const resJSON = await res.json();
      console.log(resJSON);
    } catch (err) {
      console.log(err);
    }
  };

  let UI = <p>No movies yet</p>;
  if (movies.length > 0) UI = <MoviesList movies={movies} />;
  if (error) UI = <p>{error}</p>;
  if (isLoading) UI = <p>Loading.... movies is fetching now....</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>

      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {UI}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies yet</p>}
        {isLoading && <p>Loading.... movies is fetching now....</p>}
        {!isLoading && error && <p>{error}</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
