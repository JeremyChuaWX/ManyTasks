import { ReactNode } from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">{children}</main>
    </>
  );
}

export default Layout;
