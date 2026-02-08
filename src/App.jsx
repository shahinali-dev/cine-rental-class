import { useReducer, useState } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import MovieList from "./components/movies/MovieList";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducer";
export default function App() {
  //accha eikhane amader ekta state ache cartData & setCartData, muloto ei case a amra eita k hoito useReducer a na niye gelew cholto kintu jokhn large scale a kaj korbo tokhn eita joruri r echara amra jehetu ei project korte asar age useReducer niye jenechi so amra ei state k reducer a convert korbo
  // amader project lots of reducer thakte pare ei jonno amra src te prothmei ekta folder banabo reducer nam a, then sei folder a ekta ekta kore amader reducer create korbo, amader jehetu cart related ei jonno amra name diyechi cartReducer
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);
  // eikhane amra dark mode , set dark mode state niyechi jeitar value ar opor amra html file a jei data-attibute niyechi seitar value dark or light korbo, amader goal ta ki clear? accha akhn ki bujhte parlen kaj ta kivabe hocche? muloto dark mode css file a dark variant & index.html file a date-theme attribute ar value set korlei hoye jacche,kintu oita hocche manually , kintu amader k to conditionally eita toggle korte hobe user jodi theme toggle btn a click kore tobe amader k seita sei onujayi set korte hobe html tag ar attibute a, ei kaj ta amra navbar a korlam

  // akhn bisoi hocche useReducer ar implementation ta apni valo vabe dekhe niyen ami kebol code ta update kore dilam & push diye dicchi apni kebol pull nilei sob code amr machine a peye jaben, pull neya janen to?
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
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
    </ThemeContext.Provider>
  );
}
