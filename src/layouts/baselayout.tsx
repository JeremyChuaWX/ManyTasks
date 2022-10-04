import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col items-center w-3/4 lg:w-1/2 mx-auto text-neutral-700 h-full">
        {children}
      </div>
    </div>
  );
}

export default BaseLayout;
