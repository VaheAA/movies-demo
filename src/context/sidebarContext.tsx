import { createContext, useState, useContext, ReactNode } from 'react';

interface NavbarContextType {
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
}

const NavbarContext = createContext<NavbarContextType>({
  isHovered: false,
  setIsHovered: () => {}
});

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavbarContext.Provider value={{ isHovered, setIsHovered }}>{children}</NavbarContext.Provider>
  );
};
