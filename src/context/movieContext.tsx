import { createContext, useState, useContext, ReactNode } from 'react';
import { IMovieFeatured, IMovieTrending } from '../core';

interface MovieContextType {
  featuredMovie: IMovieFeatured | IMovieTrending | null;
  setFeaturedMovie: (movie: IMovieFeatured) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const MovieContext = createContext<MovieContextType>({
  featuredMovie: null,
  setFeaturedMovie: () => {},
  isPlaying: false,
  setIsPlaying: () => {}
});

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [featuredMovie, setFeaturedMovie] = useState<IMovieFeatured | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MovieContext.Provider value={{ featuredMovie, isPlaying, setFeaturedMovie, setIsPlaying }}>
      {children}
    </MovieContext.Provider>
  );
};
