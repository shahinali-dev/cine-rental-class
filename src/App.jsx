import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import MovieList from "./components/movies/MovieList";
import { MovieContext } from "./context";
export default function App() {
  //ok then amader cart a delete from cart feature ta baki chilo
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
