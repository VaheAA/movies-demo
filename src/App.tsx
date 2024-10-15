import { RouterProvider } from 'react-router-dom';
import router from './router/router.tsx';
import { NavbarProvider } from './context/sidebarContext.tsx';
import { MovieProvider } from './context/movieContext.tsx';

function App() {
  return (
    <>
      <NavbarProvider>
        <MovieProvider>
          <RouterProvider router={router} />
        </MovieProvider>
      </NavbarProvider>
    </>
  );
}

export default App;
