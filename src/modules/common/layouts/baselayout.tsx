import Head from "next/head";
import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-slate-400 to-transparent w-full h-20"></div>
  );
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Head>
        <title>ManyTasks</title>
        <meta name="description" content="ManyTasks, a minimalist todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen">
        <Navbar />
        <div className="container mx-auto py-20 px-4">{children}</div>
      </main>
    </>
  );
}

export default BaseLayout;
