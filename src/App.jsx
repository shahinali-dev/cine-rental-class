import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import MovieList from "./components/movies/MovieList";

export default function App() {
  // ok, akhn amader dorkar movielist ar ei jonno dorkar movie data
  return (
    <div>
      <Navbar />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
        <Sidebar />
        <MovieList />
      </div>
    </div>
  );
}
