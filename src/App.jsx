import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import MovieList from "./components/movies/MovieList";
import { MovieContext } from "./context";
export default function App() {
  // eikhane ei j amra movie context ta k provie korlam akhn amra ar under a joto component ache sob gulo te ei provider ar value pabo , amra value hishabe hello diyechi tai amra hello pabo amra jodi movie ar data dei tobe movie ar data pabo. any question?
  // akhn amra jodi add to cart a setCartData ar vetor cart item ba movie set kori tobe kintu cartDta ar value hishabe amra sei data ta k pabo, amra to emontai jani tai na?

  const [cartData, setCartData] = useState([]);
  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      <Toaster />
      <div>
        <Navbar />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
          <Sidebar />
          <MovieList />
        </div>
        <Footer />
      </div>
    </MovieContext.Provider>
  );
}
