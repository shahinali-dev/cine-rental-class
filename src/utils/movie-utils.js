// eita ekta utility function jei function ta amader movie cover image ar actual URL return korbe jeihetu amra image name diyei function ta ke call korbo. bujhte perechen?

// eita dekhen ekta url return kore diche jei url ta amader image ar actual path hobe.
const getMovieUrl = (imageName) => {
  return new URL(`../assets/movie-covers/${imageName}`, import.meta.url).href;
};

export { getMovieUrl };
