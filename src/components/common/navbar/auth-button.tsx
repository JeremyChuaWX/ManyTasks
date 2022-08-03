import { signIn, signOut, useSession } from "next-auth/react";

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

export default AuthButton;
