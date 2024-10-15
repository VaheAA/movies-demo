import AppContainer from '../components/layout/AppContainer.tsx';
import MovieHighlight from '../components/movie/MovieHighlight.tsx';
import useFetch from '../hooks/useFetch.tsx';
import AppLoader from '../components/ui/AppLoader.tsx';
import { IMovieFeatured, IMovieTrending } from '../core';
import { useMovieContext } from '../context/movieContext.tsx';
import { useEffect, useMemo, useState } from 'react';

function HomePage() {
  const { setFeaturedMovie } = useMovieContext();
  const { data, loading } = useFetch<{
    Featured: IMovieFeatured;
    TrendingNow: IMovieTrending[];
  }>('/data.json');
  const [lastSeenMovies, setLastSeenMovies] = useState<string[]>([]);

  useEffect(() => {
    const seenMovies = sessionStorage.getItem('lastSeenMovies');
    if (seenMovies !== null) setLastSeenMovies(() => JSON.parse(seenMovies));
    if (data?.Featured) {
      setFeaturedMovie({ ...data?.Featured });
    }
    return () => {};
  }, [data, loading, setFeaturedMovie]);

  const sortedMovies = useMemo(() => {
    if (lastSeenMovies.length) {
      return data?.TrendingNow.sort((a, b) => {
        const aIndex = lastSeenMovies.indexOf(a.Id);
        const bIndex = lastSeenMovies.indexOf(b.Id);
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
      });
    }
    return data?.TrendingNow.sort(
      (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
    );
  }, [data]);

  return (
    <div>
      <AppContainer>
        {loading && <AppLoader />}
        {data?.Featured && <MovieHighlight trendingMovies={sortedMovies} />}
      </AppContainer>
    </div>
  );
}

export default HomePage;
