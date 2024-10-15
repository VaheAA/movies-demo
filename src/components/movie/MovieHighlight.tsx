import { formatDuration, getImagePath } from '../../shared/helpers';
import AppButton from '../ui/AppButton.tsx';
import { PlayIcon } from '../icons';
import { useMovieContext } from '../../context/movieContext.tsx';
import AppLoader from '../ui/AppLoader.tsx';
import TrendingMovies from './TrendingMovies.tsx';
import { IMovieTrending } from '../../core';

function MovieHighlight({ trendingMovies }: { trendingMovies?: IMovieTrending[] }) {
  const { featuredMovie, isPlaying } = useMovieContext();

  if (!featuredMovie) return <AppLoader />;

  const { CoverImage, Title, Category, Duration, MpaRating, ReleaseYear, Description } =
    featuredMovie;

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 h-[650px] w-full">
          {isPlaying && 'VideoUrl' in featuredMovie ? (
            <video
              className="w-full h-full object-cover"
              src={featuredMovie.VideoUrl}
              autoPlay
              muted
              loop
            />
          ) : (
            <div
              style={{ backgroundImage: `url(${getImagePath(CoverImage)})` }}
              className=" w-full h-full bg-no-repeat bg-cover bg-center"
            />
          )}
        </div>

        <div className="relative z-10 px-4 lg:py-24 mx-auto">
          <div className="max-w-3xl">
            <span className="text-gray-400 text-2xl">{Category}</span>
            <h1 className="text-5xl lg:text-6xl text-white font-bold mb-4">{Title}</h1>
            <div className="flex items-center text-white space-x-4 mb-4 text-3xl">
              <span>{ReleaseYear}</span>
              <span>{MpaRating}</span>
              <span>{formatDuration(Number(Duration))}</span>
            </div>
            <p className="mb-8 text-white text-3xl">{Description}</p>
          </div>
          <div className="flex space-x-4">
            <AppButton label="Play" variant="primary" icon={<PlayIcon />} />
            <AppButton label="More Info" variant="secondary" />
          </div>
        </div>

        <div className="mt-32">
          {trendingMovies && <TrendingMovies movies={trendingMovies ?? []} />}
        </div>
      </div>
    </>
  );
}

export default MovieHighlight;
