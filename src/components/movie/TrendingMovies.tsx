import { IMovieTrending } from '../../core';
import 'swiper/css';
import { getImagePath } from '../../shared/helpers';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.css';
import { useMovieContext } from '../../context/movieContext.tsx';

function TrendingMovies({ movies }: { movies: IMovieTrending[] }) {
  const { setFeaturedMovie, setIsPlaying } = useMovieContext();

  const selectMovie = (movie: IMovieTrending) => {
    if (!movie) return;

    setFeaturedMovie({ ...movie });
    if (setIsPlaying) setIsPlaying(false);
    const savedMovies = sessionStorage.getItem('lastSeenMovies');
    let updatedMovies = savedMovies ? JSON.parse(savedMovies) : [];
    updatedMovies = [movie.Id, ...updatedMovies.filter((id: string) => id !== movie.Id)];

    if (updatedMovies.length > 10) {
      updatedMovies = updatedMovies.slice(0, 10);
    }

    sessionStorage.setItem('lastSeenMovies', JSON.stringify(updatedMovies));

    setTimeout(() => {
      setIsPlaying(true);
    }, 2000);
  };
  return (
    <div className="flex flex-col gap-2 pt-10">
      <h2 className="text-white text-3xl">Trending Now</h2>
      <div>
        <Swiper spaceBetween={10} slidesPerView={8}>
          {movies.map((movie) => (
            <SwiperSlide
              key={movie.Id}
              className="cursor-pointer hover:scale-105 transition-all"
              onClick={() => selectMovie(movie)}>
              <div
                className="w-[200px] h-[296px] bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${getImagePath(movie.CoverImage)})` }}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TrendingMovies;
