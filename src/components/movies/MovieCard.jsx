import { useContext, useState } from "react";
import tag from "../../assets/tag.svg";
import { MovieContext } from "../../context";
import { getMovieUrl } from "../../utils/movie-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  //scrn dekha jai?? ok then amra prothome event propagation issue ta fix kore asi
  // accha akhn dekhen add to cart a add korle kintu r modal open hocchena tai na? hello r u available? ami kintu click kortechi but kono modal ki open hocchilo? ok but amader ekta bug create hoyeche code a, mone ache amra seelctedMovie nam a ekta state nite giyechilam? actually eikhane ki hocche movie card a single movie aslew seita to map hocche bar bar tai na? so amader k eikhane selectedMovie state ta nite hobe

  const { dispatch } = useContext(MovieContext);

  //toast gulo ki dekha jai? eita configuration bujhte perechen? ok akhn amra ei cart data k cart icon a click korle jeno dekha jai seita ensure korbo

  // reducer a niye jawyar jei condion chilo seikhane bola chilo handler gulor logic k reducer a niye jawya
  const addToCart = (e, movie) => {
    e.stopPropagation();
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...movie,
      },
    });
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          onAddtoCart={addToCart}
        />
      )}
      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="#" onClick={() => handleMovieSelect(movie)}>
          <img
            className="w-full object-cover"
            src={getMovieUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              onClick={(e) => addToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            >
              <img src={tag} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
