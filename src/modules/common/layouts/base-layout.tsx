import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

function AuthButton() {
  const { data: session } = useSession();

  function handleAuth() {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  }

  return (
    <button onClick={handleAuth}>{session ? "Sign Out" : "Sign In"}</button>
  );
}

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-slate-400 to-transparent w-full h-20">
      <div className="flex justify-end p-4">
        <AuthButton />
      </div>
    </div>
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
