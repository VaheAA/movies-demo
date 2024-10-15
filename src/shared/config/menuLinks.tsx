import { GenreIcon, HomeIcon, LaterIcon, MoviesIcon, ShowsIcon } from '../../components/icons';

export const menuLinks = [
  {
    to: '/',
    icon: <HomeIcon />,
    label: 'Home'
  },
  {
    to: '/tv-shows',
    icon: <ShowsIcon />,
    label: 'TV Shows'
  },
  {
    to: '/movies',
    icon: <MoviesIcon />,
    label: 'Movies'
  },
  {
    to: '/genre',
    icon: <GenreIcon />,
    label: 'Genres'
  },
  {
    to: '/watch-later',
    icon: <LaterIcon />,
    label: 'Watch Later'
  }
];
