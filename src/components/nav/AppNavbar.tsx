import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_EXPANDED } from '../../shared/constants';
import { menuLinks } from '../../shared/config/menuLinks.tsx';
import { NavLink } from 'react-router-dom';
import { cloneElement } from 'react';
import { SearchIcon } from '../icons';
import { useNavbarContext } from '../../context/sidebarContext.tsx';

function AppNavbar() {
  const { isHovered, setIsHovered } = useNavbarContext();
  function getLinkStyles(isActive = false) {
    const baseClasses = `
    h-[82px] flex text-white p-4 transition-bg mt-4 items-center
    ${isHovered ? 'w-[312px] rounded-lg' : 'w-[82px] rounded-full justify-center'}
    ${isActive ? 'bg-[#3B486D]' : 'hover:bg-[#3B486D]'}
  `;

    return baseClasses.trim();
  }

  return (
    <aside
      style={{
        width: isHovered ? `${SIDEBAR_WIDTH_EXPANDED}px` : `${SIDEBAR_WIDTH}px`,
        transition: 'width 0.3s ease-in-out, background-color 0.3s ease-in-out'
      }}
      className={`p-4 flex flex-col justify-center items-center fixed left-0 top-0 right-0 bottom-0 ${isHovered ? 'bg-black/70 z-20' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="flex flex-col justify-between items-center gap-4 w-full">
        <div
          className={`flex items-center mb-4 w-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} h-16`}>
          <img
            src="https://i.pravatar.cc/300"
            alt="Profile"
            className="w-12 h-12 rounded-full"
            style={{ visibility: isHovered ? 'visible' : 'hidden' }}
          />
          {isHovered && <span className="ml-4 text-white text-3xl">John Doe</span>}
        </div>
        <ul className="flex flex-col w-full">
          <button className={getLinkStyles()}>
            <SearchIcon />
            {isHovered && <span className="ml-4 text-white text-3xl">Search</span>}
          </button>
          {menuLinks.map((link) => (
            <li key={link.to}>
              <NavLink className={({ isActive }) => getLinkStyles(isActive)} to={link.to}>
                {({ isActive }) => (
                  <div className="flex items-center">
                    {cloneElement(link.icon, { fill: isActive ? '#fff' : 'none' })}
                    {isHovered && (
                      <span className={`ml-4 text-white text-3xl ${isActive ? 'font-bold' : ''}`}>
                        {link.label}
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className={`mt-auto mb-4 w-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} h-24`}>
          <ul className="flex flex-col gap-2 uppercase text-gray-400/80 text-3xl">
            <li className="cursor-pointer hover:underline">
              <NavLink to="/language">Language</NavLink>
            </li>
            <li className="cursor-pointer hover:underline">
              {' '}
              <NavLink to="/help">Get Help</NavLink>
            </li>
            <li className="cursor-pointer hover:underline">
              <NavLink to="/exit">Exit</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default AppNavbar;
