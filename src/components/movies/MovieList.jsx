import { getAllMovies } from "../../data/movies";
import MovieCard from "./MovieCard";

export default function MovieList() {
  // amra movie data theke ekta function return korechilam jei function ta holo getAllMovies jeita amader sob movie data return korbe. akhn amra oi function ta ke call kore dekhi ki paichi. amra console a already amader data gulo k dekhte pacchi, akhn amra movie card component banabo jeita amader prottekta movie er data ke show korbe.
  const movies = getAllMovies();
  console.log(movies);
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
