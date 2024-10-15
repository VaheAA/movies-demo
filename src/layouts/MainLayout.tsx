import { Outlet } from 'react-router-dom';
import AppNavbar from '../components/nav/AppNavbar.tsx';
import { SIDEBAR_WIDTH } from '../shared/constants';

function MainLayout() {
  return (
    <div className="flex relative">
      <AppNavbar />
      <main
        className="w-full"
        style={{
          paddingLeft: `${SIDEBAR_WIDTH}px`,
          transition: 'padding 0.3s ease-in-out'
        }}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
