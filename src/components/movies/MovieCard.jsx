import { useState } from "react";
import tag from "../../assets/tag.svg";
import { getMovieUrl } from "../../utils/movie-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  // akhn amra eto tuku change k commit korbo git a

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = () => {
    console.log("add to cart");
  };
  return (
    <>
      {isModalOpen && (
        <MovieDetailsModal
          movie={movie}
          onClose={() => setIsModalOpen(false)}
          onAddtoCart={addToCart}
        />
      )}
      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="#" onClick={() => setIsModalOpen(true)}>
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
            <button className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
              <img src={tag} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
