import { ReactNode } from "react";

interface CenterLayoutProps {
  children: ReactNode;
}

function CenterLayout({ children }: CenterLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
        {children}
    </div>
  );
}

export default CenterLayout;
