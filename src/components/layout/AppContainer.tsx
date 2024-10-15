import { ReactNode } from 'react';

function AppContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto h-full">{children}</div>;
}

export default AppContainer;
