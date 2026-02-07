import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import MovieList from "./components/movies/MovieList";

export default function App() {
  // ok, amader footer add kora done, akhn amra ektu main app a dekhi, ekhane dekhen amra movie card a click korle ekta details modal open hocche, amra akhn eita amader code a implement korbo
  return (
    <div>
      <Navbar />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
        <Sidebar />
        <MovieList />
      </div>
      <Footer />
    </div>
  );
}
