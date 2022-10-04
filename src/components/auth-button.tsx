import { signIn, signOut, useSession } from "next-auth/react";

const btn =
  "bg-white py-2 px-3 rounded-full hover:bg-neutral-100 transition ease-in-out duration-250";

function AuthButton() {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <button className={btn} onClick={() => signOut()}>
        Sign Out
      </button>
    );
  }

  return (
    <button className={btn} onClick={() => signIn("google")}>
      Sign In
    </button>
  );
}

export default AuthButton;
