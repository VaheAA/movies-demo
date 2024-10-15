import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import MainLayout from '../layouts/MainLayout.tsx';

const HomePage = lazy(() => import('../pages/HomePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '*',
        element: <HomePage />
      }
    ]
  }
]);

export default router;
